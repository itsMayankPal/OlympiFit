import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";

const challengesData = [
  {
    id: 1,
    title: "100m Sprint",
    description: "Race to the finish line in under 10 seconds!",
  },
  {
    id: 2,
    title: "Marathon Run",
    description: "Complete a full marathon in record time!",
  },
  {
    id: 3,
    title: "Weightlifting",
    description: "Lift the heaviest weights and set new records!",
  },
  {
    id: 4,
    title: "Long Jump",
    description: "Achieve the longest jump distance!",
  },
  {
    id: 5,
    title: "Swimming",
    description: "Complete the swimming challenge with speed and endurance!",
  },
  { id: 6, title: "Cycling", description: "Take part in a 50km cycling race!" },
  // Add more challenges...
];

const ChallengesGrid = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Grid container spacing={4}>
        {challengesData.map((challenge) => (
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
