import { Typography, Box } from "@mui/material";

const ChallengesContent = () => {
  return (
    <Box sx={{ textAlign: "center", py: 2 }}>
      <Typography
        variant="h3"
        sx={{ fontWeight: "bold", color: "#007bff", mb: 3 }}
      >
        Ongoing Challenges
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{ fontStyle: "italic", color: "#555" }}
      >
        Take part in our latest challenges and push yourself to the limits!
      </Typography>
    </Box>
  );
};

export default ChallengesContent;
