import React from "react";
import {
  Box,
  Typography,
  Container,
  Card,
  Grid,
  Avatar,
  Divider,
  Button,
} from "@mui/material";
import SportsGymnasticsSharpIcon from "@mui/icons-material/SportsGymnasticsSharp";
import { Link } from "react-router-dom";
export default function AboutUs() {
  return (
    <Container
      maxWidth="md"
      style={{
        marginTop: "50px",
        backgroundColor: "#F5F5F5",
        padding: "20px",
        borderRadius: "15px",
      }}
    >
      <Card
        style={{
          padding: "40px",
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
          background: "white",
          color: "#212121",
          borderRadius: "20px",
        }}
      >
        {/* Header Section */}
        <Box textAlign="center" mb={4}>
          <Avatar
            sx={{
              backgroundColor: "#FBC02D",
              margin: "0 auto",
              width: 80,
              height: 80,
            }}
          >
            <SportsGymnasticsSharpIcon sx={{ fontSize: 50 }} />
          </Avatar>
          <Typography
            variant="h3"
            style={{ marginTop: "20px", color: "#003366" }}
          >
            About Us -{" "}
            <span style={{ color: "#FBC02D" }}>
              <strong>InnoVators</strong>
            </span>
          </Typography>
          <Typography style={{ color: "#FBC02D" }} variant="h6" mt={2}>
            <em>"Push Beyond Limits, Achieve Olympic Greatness!"</em>
          </Typography>
        </Box>

        <Divider style={{ backgroundColor: "#003366", height: "2px" }} />

        {/* Who We Are Section */}
        <Box mt={4}>
          <Typography variant="h4" gutterBottom style={{ color: "#003366" }}>
            Who We Are
          </Typography>
          <Typography variant="body1" paragraph>
            We are <strong>InnoVators</strong>, a passionate team of developers
            and fitness enthusiasts with the goal to inspire and motivate
            individuals to achieve their fitness dreams just like Olympic
            athletes. We combine the best of technology and fitness to offer a
            platform that challenges you to push your limits.
          </Typography>
        </Box>

        {/* Team Section */}
        <Box mt={4}>
          <Typography variant="h4" gutterBottom style={{ color: "#003366" }}>
            Meet Our Team
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {[
              {
                name: "Mayank Pal",
                imgsc:
                  "https://i.pinimg.com/736x/da/3b/3f/da3b3f3a76a43b0a14e21efa71cdd918.jpg",
                description:
                  "Skilled developer and backend specialist, ensuring smooth functionality.",
              },
              {
                name: "Nitika Dung",
                imgsc:
                  "https://i.pinimg.com/564x/84/21/3c/84213c274232612ea26c8809893b3c7f.jpg",
                description:
                  "Frontend developer responsible for the website's design and user experience.",
              },
              {
                name: "Muskan Sharma",
                imgsc:
                  "https://i.pinimg.com/564x/41/2b/3a/412b3a99e2aa01f55f6602188085090d.jpg",
                description:
                  "Integrates fitness challenges and rewards, embodying the Olympic spirit.",
              },
            ].map((member) => (
              <Grid item xs={12} sm={4} key={member.name}>
                <Card
                  sx={{
                    padding: "20px",
                    textAlign: "center",
                    backgroundColor: "#0288d1",
                    color: "#fff",
                    borderRadius: "10px",
                  }}
                >
                  <Avatar
                    sx={{ width: 80, height: 80, margin: "0 auto", mb: 2 }}
                    src={member.imgsc}
                    alt={member.name}
                  />
                  <Typography variant="h6">{member.name}</Typography>
                  <Typography variant="body2">{member.description}</Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Our Mission Section */}
        <Box mt={4}>
          <Typography variant="h4" gutterBottom style={{ color: "#003366" }}>
            Our Mission
          </Typography>
          <Typography variant="body1" paragraph>
            At <strong>InnoVators</strong>, our mission is simple:{" "}
            <strong>"Push Beyond Limits, Achieve Olympic Greatness!"</strong>
            We aim to help individuals reach their peak performance through
            personalized challenges, rewarding achievements, and a holistic
            approach to fitness and well-being.
          </Typography>
          <Typography variant="body1" paragraph>
            Whether you're aiming to lose weight, build muscle, or simply live a
            healthier lifestyle, we provide the tools and motivation to help you
            reach your fitness goals. Our platform offers features such as:
          </Typography>
          <ul>
            <li>Personalized fitness challenges</li>
            <li>Rewards and badges for completing milestones</li>
            <li>Push notifications to keep you motivated</li>
            <li>Customizable profiles to track your journey</li>
          </ul>
        </Box>

        {/* Call to Action */}
        <Box textAlign="center" mt={4}>
          <Link to="/register" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                padding: "10px 30px",
                backgroundColor: "#FBC02D",
                color: "#003366",
                "&:hover": {
                  backgroundColor: "#c8b400", // Darker shade on hover
                },
              }}
            >
              Join Us in the Journey!
            </Button>
          </Link>
        </Box>
      </Card>
    </Container>
  );
}
