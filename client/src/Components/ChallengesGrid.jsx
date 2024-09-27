// ChallengesGrid.jsx

import React, { useEffect, useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import axios from "axios"; // Import axios to fetch data from API

const ChallengesGrid = () => {
  const [challenges, setChallenges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch challenges from the backend API
  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3002/api/challenges"
        );
        setChallenges(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load challenges.");
        setLoading(false);
      }
    };

    fetchChallenges();
  }, []);

  if (loading) return <Typography>Loading challenges...</Typography>;
  if (error) return <Typography>{error}</Typography>;

  return (
    <Box sx={{ p: 4 }}>
      <Grid container spacing={4}>
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
                <Button variant="contained" color="primary">
                  Join Challenge
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ChallengesGrid;
