import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import myImage from "../Assets/bgImg.png";

export default function MainContent() {
  return (
    <Container sx={{ marginY: 4 }}>
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          backgroundImage: {
            // xs: `url(${athleteImage})`, // Use athlete image for mobile
            sm: `url(${myImage})`, // Use background wimage for larger screens
          },
          backgroundSize: "cover",
          backgroundPosition: "center",
          // opacity: 0.7, // Adjust opacity for transparency
          // borderRadius: "8px",
          // boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          animation: "run-to-screen 0.5s ease-out forwards",
          padding: 4, // Add padding for inner content
        }}
      >
        <Grid container spacing={2}>
          {/* Left Column - Tagline Text */}
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: "left", padding: 2 }}>
              <Typography
                className="text-white"
                variant="h3"
                component="h1"
                gutterBottom
              >
                Push Beyond Limits Achieve Olympic Greatness!
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Join us in the journey to achieve Olympic greatness! Whether
                you're training for the next big event or just looking to stay
                fit, we have the resources you need.
              </Typography>
            </Box>
          </Grid>

          {/* Right Column - Athlete Image */}
          <Grid item xs={12} md={6}></Grid>
        </Grid>
      </Box>
    </Container>
  );
}
