import React, { useEffect, useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  CircularProgress,
  Card,
  CardContent,
  Button,
  Avatar,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../AuthContext"; // Corrected path for useAuth

const Dashboard = () => {
  const navigate = useNavigate();
  const { isAuthenticated, handleLogout, userId } = useAuth();
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3002/api/users/user/${userId}`
        );
        setUserData(response.data);
      } catch (err) {
        setError("Failed to fetch user data. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId]);

  const handleCancelChallenge = async (id) => {
    if (!userData) {
      alert("Please log in to cancel challenges.");
      navigate("/register");
      return;
    }

    try {
      await axios.post(`http://localhost:3002/api/challenges/cancelChallenge`, {
        userId: userId,
        challengeId: id,
      });
    } catch (err) {
      console.error(err);
      alert("An error occurred while canceling the challenge.");
    }
  };

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Box>
    );
  }

  // Example ranking logic
  const rank =
    userData.challengesJoined.length > 5
      ? "Gold"
      : userData.challengesJoined.length > 2
      ? "Silver"
      : "Bronze";

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            Dashboard - User: {userData.name}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ p: 3 }}>
        {/* User Information Section */}
        <Box
          sx={{
            mb: 4,
            padding: 3,
            backgroundColor: "#f9f9f9",
            borderRadius: 2,
          }}
        >
          {/* Welcome Message */}
          <Typography variant="h4" gutterBottom>
            Welcome to Your Dashboard!
          </Typography>

          {/* User Details */}
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Personal Information
              </Typography>
              <Box
                sx={{
                  padding: 2,
                  backgroundColor: "#fff",
                  borderRadius: 2,
                  boxShadow: 1,
                }}
              >
                <Typography variant="body1">
                  Email: <strong>{userData.email}</strong>
                </Typography>
                <Typography variant="body1">
                  Weight: <strong>{userData.weight} kg</strong>
                </Typography>
                <Typography variant="body1">
                  Age: <strong>{userData.age} years</strong>
                </Typography>
                <Typography variant="body1">
                  Gender: <strong>{userData.gender}</strong>
                </Typography>
                <Typography variant="body1">
                  Height: <strong>{userData.height} cm</strong>
                </Typography>
                <Typography variant="body1">
                  Target Weight: <strong>{userData.targetWeight} kg</strong>
                </Typography>
                <Typography variant="body1">
                  Target Months: <strong>{userData.targetMonths}</strong>
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Profile Ranking
              </Typography>
              <Box
                sx={{
                  padding: 2,
                  backgroundColor: "#fff",
                  borderRadius: 2,
                  boxShadow: 1,
                  textAlign: "center",
                }}
              >
                <Typography variant="h5" color="primary">
                  Your Rank: <strong>{rank}</strong>
                </Typography>
              </Box>
            </Grid>
          </Grid>

          {/* Challenges Taken */}
          <Box sx={{ marginTop: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Challenges Taken
            </Typography>
            <Box
              sx={{
                padding: 2,
                backgroundColor: "#fff",
                borderRadius: 2,
                boxShadow: 1,
                marginTop: 2,
              }}
            >
              <Typography variant="body1">
                Number of Challenges:{" "}
                <strong>{userData.challengesJoined.length}</strong>
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Challenges List */}
        <Box mt={4}>
          <Typography variant="h5">Your Challenges:</Typography>
          <Box display="flex" flexDirection="column" mt={2}>
            {Array.isArray(userData.challengesJoined) &&
            userData.challengesJoined.length > 0 ? (
              userData.challengesJoined.map((challenge) => (
                <Card key={challenge._id} variant="outlined" sx={{ mb: 2 }}>
                  <CardContent>
                    <Typography variant="h6">{challenge.title}</Typography>
                    <Typography variant="body2">
                      {challenge.description}
                    </Typography>
                    <Typography variant="body2">
                      Start Date:{" "}
                      {new Date(challenge.startDate).toLocaleDateString()}
                    </Typography>
                    <Typography variant="body2">
                      End Date:{" "}
                      {new Date(challenge.endDate).toLocaleDateString()}
                    </Typography>
                    <Typography variant="body2">
                      Participants: {challenge.participants}
                    </Typography>
                    <Typography variant="body2">
                      Progress: {challenge.progress}
                    </Typography>
                    <Button
                      variant="outlined"
                      color="error"
                      sx={{ mt: 2 }}
                      onClick={() => handleCancelChallenge(challenge._id)}
                    >
                      Cancel
                    </Button>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Typography variant="body1">No challenges taken yet.</Typography>
            )}
          </Box>
        </Box>
      </Box>
      {isAuthenticated && (
        <Button onClick={handleLogout} variant="outlined" color="error">
          Logout
        </Button>
      )}
    </Box>
  );
};

export default Dashboard;
