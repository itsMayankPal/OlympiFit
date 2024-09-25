import React, { useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  LinearProgress,
} from "@mui/material";

const challengesData = [
  {
    id: 1,
    title: "100m Sprint",
    description: "Race to the finish line in under 10 seconds!",
    progress: 70,
    isJoined: false,
  },
  {
    id: 2,
    title: "Marathon Run",
    description: "Complete a full marathon in record time!",
    progress: 30,
    isJoined: true,
  },
  {
    id: 3,
    title: "Weightlifting",
    description: "Lift the heaviest weights and set new records!",
    progress: 50,
    isJoined: false,
  },
  {
    id: 4,
    title: "Long Jump",
    description: "Achieve the longest jump distance!",
    progress: 90,
    isJoined: true,
  },
  {
    id: 5,
    title: "Swimming",
    description: "Complete the swimming challenge with speed and endurance!",
    progress: 45,
    isJoined: false,
  },
  {
    id: 6,
    title: "Cycling",
    description: "Take part in a 50km cycling race!",
    progress: 20,
    isJoined: true,
  },
];

const JoinDetailButton = () => {
  const [challenges, setChallenges] = useState(challengesData);

  const handleJoinChallenge = (id) => {
    setChallenges(
      challenges.map((challenge) =>
        challenge.id === id ? { ...challenge, isJoined: true } : challenge
      )
    );
  };

  return (
    <Box sx={{ p: 4 }}>
      <Grid container spacing={4}>
        {challenges.map((challenge) => (
          <Grid item xs={12} sm={6} md={4} key={challenge.id}>
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

                {/* Dynamic Button */}
                {challenge.isJoined ? (
                  <Button variant="outlined" color="secondary">
                    View Details
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleJoinChallenge(challenge.id)}
                  >
                    Join Challenge
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

export default JoinDetailButton;
