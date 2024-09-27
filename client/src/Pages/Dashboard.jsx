import React, { useEffect, useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  CircularProgress,
  Grid,
} from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const { userId } = useParams();
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

  // Example ranking logic (you can replace this with your own logic)
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
        <Typography variant="h4">Welcome to Your Dashboard!</Typography>
        <Typography variant="body1">Email: {userData.email}</Typography>
        <Typography variant="body1">Weight: {userData.weight} kg</Typography>
        <Typography variant="body1">Age: {userData.age} years</Typography>
        <Typography variant="body1">Gender: {userData.gender}</Typography>
        <Typography variant="body1">Height: {userData.height} cm</Typography>
        <Typography variant="body1">
          Target Weight: {userData.targetWeight} kg
        </Typography>
        <Typography variant="body1">
          Target Months: {userData.targetMonths}
        </Typography>

        <Box mt={4}>
          <Typography variant="h5">Profile Ranking:</Typography>
          <Typography variant="body1">Your Rank: {rank}</Typography>
        </Box>

        <Box mt={4}>
          <Typography variant="h5">Challenges Taken:</Typography>
          <Typography variant="body1">
            Number of Challenges: {userData.challengesJoined.length}
          </Typography>
          {userData.challengesJoined.length > 0 ? (
            userData.challengesJoined.map((challenge) => (
              <Typography key={challenge} variant="body1">
                Challenge ID: {challenge}
              </Typography>
            ))
          ) : (
            <Typography variant="body1">No challenges taken yet.</Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
