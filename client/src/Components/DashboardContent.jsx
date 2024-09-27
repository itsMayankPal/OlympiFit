import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", weight: 68 },
  { name: "Feb", weight: 67 },
  { name: "Mar", weight: 66 },
  { name: "Apr", weight: 65 },
];

const DashboardContent = ({ user }) => {
  return (
    <Box>
      <Typography variant="h4">
        Welcome to Your Dashboard, {user.name}
      </Typography>
      <Typography variant="subtitle1">Email: {user.email}</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: "20px" }}>
            <Typography variant="h6">Weight Progress</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="weight"
                  stroke="#8884d8"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: "20px" }}>
            <Typography variant="h6">Target Achievement</Typography>
            <Typography variant="body1">
              You are on track with your weight loss goal!
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardContent;
