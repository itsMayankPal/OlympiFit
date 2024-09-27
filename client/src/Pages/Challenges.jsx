import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  LinearProgress,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext"; // Corrected path for useAuth

const Challenges = () => {
  const { isAuthenticated, userId } = useAuth(); // Access authentication state
  const [challenges, setChallenges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userChallenges, setUserChallenges] = useState([]);
  const [joining, setJoining] = useState(false); // State for joining challenge
  const navigate = useNavigate();

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3002/api/challenges"
        );
        setChallenges(response.data);
      } catch (err) {
        setError("Failed to load challenges. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchChallenges();
  }, []);

  const handleJoinChallenge = async (id) => {
    if (!isAuthenticated) {
      alert("Please log in to join challenges.");
      navigate("/register");
      return;
    }

    setJoining(true); // Set loading state
    try {
      // eslint-disable-next-line
      const response = await axios.put(
        `http://localhost:3002/api/challenges/joinChallenge`,
        {
          userId: userId,
          challengeId: id,
        }
      );

      // Update local state
      setChallenges((prevChallenges) =>
        prevChallenges.map((challenge) =>
          challenge._id === id ? { ...challenge, isJoined: true } : challenge
        )
      );
      setUserChallenges((prevUserChallenges) => [...prevUserChallenges, id]);
    } catch (error) {
      console.error("Error joining challenge", error.response.data.message);
      alert("Failed to join the challenge. Please try again later.");
    } finally {
      setJoining(false); // Reset loading state
    }
  };

  const handleCancelChallenge = async (id) => {
    // Implement cancel challenge logic here
    // Example:
    if (!isAuthenticated) {
      alert("Please log in to cancel challenges.");
      navigate("/register");
      return;
    }

    try {
      // eslint-disable-next-line
      const response = await axios.put(
        `http://localhost:3002/api/challenges/cancelChallenge`,
        {
          userId: userId,
          challengeId: id,
        }
      );

      // Update local state
      setChallenges((prevChallenges) =>
        prevChallenges.map((challenge) =>
          challenge._id === id ? { ...challenge, isJoined: false } : challenge
        )
      );
      setUserChallenges((prevUserChallenges) =>
        prevUserChallenges.filter((challengeId) => challengeId !== id)
      );
    } catch (error) {
      console.error("Error canceling challenge", error.response.data.message);
      alert("Failed to cancel the challenge. Please try again later.");
    }
  };

  if (loading) return <Typography>Loading challenges...</Typography>;
  if (error) return <Typography>{error}</Typography>;

  return (
    <Box sx={{ p: 4 }}>
      <Grid container spacing={4}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          You have joined {userChallenges.length} challenges.
        </Typography>
        {challenges.map((challenge) => (
          <Grid item xs={12} sm={6} md={4} key={challenge._id}>
            <Card
              sx={{
                backgroundColor: "#f5f5f5",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", color: "#007bff", mb: 2 }}
                >
                  {challenge.title}
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  {challenge.description}
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={challenge.progress}
                  sx={{ height: 10, borderRadius: 5, mb: 2 }}
                />
                <Typography variant="body2" sx={{ mb: 3 }}>
                  {challenge.progress}% Completed
                </Typography>

                {challenge.isJoined ? (
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => handleCancelChallenge(challenge._id)}
                  >
                    Cancel Challenge
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleJoinChallenge(challenge._id)}
                    disabled={joining} // Disable button while joining
                  >
                    {joining ? "Joining..." : "Join Challenge"}
                  </Button>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Challenges;
