import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function Features() {
  return (
    <Box sx={{ backgroundColor: "#282c34", padding: "50px 0", width: "100%" }}>
      {/* Center the content within a Container */}
      <Container>
        {/* Features Section Header */}
        <Typography
          variant="h3"
          align="center"
          sx={{ fontWeight: "bold", marginBottom: "30px", color: "#fff" }}
        >
          Features
        </Typography>

        {/* Features Grid */}
        <Grid container spacing={4}>
          {/* Feature 2 */}
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: "center" }}>
              <CheckCircleIcon
                sx={{ fontSize: 60, color: "#4caf50", marginBottom: "10px" }}
              />
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", marginBottom: "10px", color: "#fff" }}
              >
                Leaderboards
              </Typography>
              <Typography variant="body1" sx={{ color: "#ccc" }}>
                Compete with others and see where you stand with our global
                leaderboards.
              </Typography>
            </Box>
          </Grid>

          {/* Feature 3 */}
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: "center" }}>
              <CheckCircleIcon
                sx={{ fontSize: 60, color: "#4caf50", marginBottom: "10px" }}
              />
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", marginBottom: "10px", color: "#fff" }}
              >
                Personalized Challenges
              </Typography>
              <Typography variant="body1" sx={{ color: "#ccc" }}>
                Take part in custom challenges that match your fitness level and
                goals.
              </Typography>
            </Box>
          </Grid>

          {/* Feature 4 - Rewards and Badges */}
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: "center" }}>
              <CheckCircleIcon
                sx={{ fontSize: 60, color: "#4caf50", marginBottom: "10px" }}
              />
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", marginBottom: "10px", color: "#fff" }}
              >
                Rewards and Badges
              </Typography>
              <Typography variant="body1" sx={{ color: "#ccc" }}>
                Earn rewards and badges as you achieve new milestones.
              </Typography>
            </Box>
          </Grid>

          {/* Feature 5 - Customizable Profile */}
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: "center" }}>
              <CheckCircleIcon
                sx={{ fontSize: 60, color: "#4caf50", marginBottom: "10px" }}
              />
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", marginBottom: "10px", color: "#fff" }}
              >
                Customizable Profile
              </Typography>
              <Typography variant="body1" sx={{ color: "#ccc" }}>
                Personalize your profile with avatars, goals, and preferences.
              </Typography>
            </Box>
          </Grid>

          {/* Feature 6 - Push Notifications */}
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: "center" }}>
              <CheckCircleIcon
                sx={{ fontSize: 60, color: "#4caf50", marginBottom: "10px" }}
              />
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", marginBottom: "10px", color: "#fff" }}
              >
                Push Notifications
              </Typography>
              <Typography variant="body1" sx={{ color: "#ccc" }}>
                Stay updated with real-time notifications about activities and
                milestones.
              </Typography>
            </Box>
          </Grid>

          {/* Feature 7 - Customer Support */}
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: "center" }}>
              <CheckCircleIcon
                sx={{ fontSize: 60, color: "#4caf50", marginBottom: "10px" }}
              />
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", marginBottom: "10px", color: "#fff" }}
              >
                Customer Support
              </Typography>
              <Typography variant="body1" sx={{ color: "#ccc" }}>
                Get instant help through our dedicated support system.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
