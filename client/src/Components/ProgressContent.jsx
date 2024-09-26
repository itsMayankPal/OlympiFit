import React from "react";
import { Typography } from "@mui/material";

export default function ProgressContent() {
  return (
    <div>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          mb: 3,
          color: "#007bff",
          textAlign: "center",
        }}
      >
        Your Progress
      </Typography>
      ;
    </div>
  );
}
