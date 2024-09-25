import React from "react";
import { Container, Typography, Box } from "@mui/material";

export default function History() {
  return (
    // Box to handle full-width background color
    <Box sx={{ backgroundColor: "#fff", padding: "50px 0", width: "100%" }}>
      <Container className="history">
        <Typography variant="h4" sx={{ color: "#000", marginBottom: "16px" }}>
          History of Olympic Games
        </Typography>

        <Typography
          sx={{ color: "#000", fontSize: "18px", marginBottom: "12px" }}
        >
          1896 – Modern Olympics Revived: After centuries of dormancy, the
          Olympic Games were revived by Pierre de Coubertin in Athens, Greece.
          The first modern Olympics featured 241 athletes from 14 countries
          competing in 43 events.
        </Typography>

        <Typography
          sx={{ color: "#000", fontSize: "18px", marginBottom: "12px" }}
        >
          1900 – First Female Athletes: The Paris Olympics introduced female
          athletes for the first time. Women competed in tennis and golf,
          marking the beginning of gender inclusion in the Games.
        </Typography>

        <Typography
          sx={{ color: "#000", fontSize: "18px", marginBottom: "12px" }}
        >
          1924 – First Winter Olympics: The inaugural Winter Olympic Games were
          held in Chamonix, France. Sports like figure skating, ice hockey, and
          bobsled were introduced.
        </Typography>

        <Typography variant="h5" sx={{ color: "#000", marginBottom: "16px" }}>
          India's Olympic Journey
        </Typography>

        <Typography
          sx={{ color: "#000", fontSize: "18px", marginBottom: "12px" }}
        >
          1900 – First Indian Athlete: Norman Pritchard became the first Indian
          to participate in the Olympics, representing British India at the
          Paris Games. He won two silver medals in athletics (200m and 200m
          hurdles).
        </Typography>

        <Typography
          sx={{ color: "#000", fontSize: "18px", marginBottom: "12px" }}
        >
          1928 – First Gold in Field Hockey: India won its first gold medal in
          field hockey at the Amsterdam Olympics, beginning a historic run of
          dominance in the sport led by Dhyan Chand.
        </Typography>

        {/* Continue with similar styling for other sections */}

        <Typography variant="h6" sx={{ color: "#000", marginTop: "20px" }}>
          2024 – Paris (Upcoming)
        </Typography>
        <Typography
          sx={{ color: "#000", fontSize: "18px", marginBottom: "12px" }}
        >
          India will be looking to build on its success and make a mark at the
          Paris Olympics in 2024, with hopes of improving its medal tally
          further.
        </Typography>
      </Container>
    </Box>
  );
}
