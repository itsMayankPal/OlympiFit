import React from "react";
import { Container, Box, Typography, Avatar, Grid } from "@mui/material";

const Top3Lead = ({ topThree }) => {
  return (
    <Container sx={{ py: 4 }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", color: "#007bff" }}
      >
        Top 3 Performers
      </Typography>
      <Grid container justifyContent="center" spacing={3}>
        {/* Second Place */}
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              textAlign: "center",
              p: 2,
              border: "2px solid #C0C0C0", // Silver for 2nd place
              borderRadius: "12px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <Avatar
              src={topThree[1].avatar}
              alt={topThree[1].name}
              sx={{
                width: 120,
                height: 120,
                mx: "auto",
                border: "3px solid silver",
              }}
            />
            <Typography variant="h6" sx={{ mt: 2 }}>
              {topThree[1].name}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Rank: {topThree[1].rank}
            </Typography>
            <Typography variant="h5" sx={{ mt: 1, color: "#007bff" }}>
              {topThree[1].score} points
            </Typography>
          </Box>
        </Grid>

        {/* First Place - Center and Larger */}
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              textAlign: "center",
              p: 2,
              border: "2px solid #FFD700", // Gold for 1st place
              borderRadius: "12px",
              backgroundColor: "#fdf5e6", // Slight gold tone
            }}
          >
            <Avatar
              src={topThree[0].avatar}
              alt={topThree[0].name}
              sx={{
                width: 150,
                height: 150,
                mx: "auto",
                border: "5px solid gold",
              }}
            />
            <Typography variant="h5" sx={{ mt: 2, fontWeight: "bold" }}>
              {topThree[0].name}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Rank: {topThree[0].rank}
            </Typography>
            <Typography variant="h4" sx={{ mt: 1, color: "#007bff" }}>
              {topThree[0].score} points
            </Typography>
          </Box>
        </Grid>

        {/* Third Place */}
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              textAlign: "center",
              p: 2,
              border: "2px solid #CD7F32", // Bronze for 3rd place
              borderRadius: "12px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <Avatar
              src={topThree[2].avatar}
              alt={topThree[2].name}
              sx={{
                width: 120,
                height: 120,
                mx: "auto",
                border: "3px solid #CD7F32",
              }}
            />
            <Typography variant="h6" sx={{ mt: 2 }}>
              {topThree[2].name}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Rank: {topThree[2].rank}
            </Typography>
            <Typography variant="h5" sx={{ mt: 1, color: "#007bff" }}>
              {topThree[2].score} points
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Top3Lead;
