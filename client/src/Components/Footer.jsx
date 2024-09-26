import React from "react";
import { Container, Typography, Box, Link } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

export default function Footer() {
  return (
    <Box
      sx={{
        color: "#fff",
        padding: "20px 0",
        marginTop: "auto",
      }}
    >
      <Container>
        <Typography variant="h6" align="center" gutterBottom>
          OlympiFit - Push Beyond Limits Achieve Olympic Greatness!
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "10px",
          }}
        >
          <Link href="/" color="inherit" sx={{ mx: 1 }}>
            Home
          </Link>
          <Link href="/about" color="inherit" sx={{ mx: 1 }}>
            Olympic History
          </Link>
          <Link href="/features" color="inherit" sx={{ mx: 1 }}>
            Features
          </Link>
          <Link href="/faq" color="inherit" sx={{ mx: 1 }}>
            FAQ
          </Link>
          <Link href="/contact" color="inherit" sx={{ mx: 1 }}>
            Contact
          </Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "10px",
          }}
        >
          <Link
            href="https://facebook.com"
            target="_blank"
            color="inherit"
            sx={{ mx: 1 }}
          >
            <Facebook />
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            color="inherit"
            sx={{ mx: 1 }}
          >
            <Twitter />
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            color="inherit"
            sx={{ mx: 1 }}
          >
            <Instagram />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            color="inherit"
            sx={{ mx: 1 }}
          >
            <LinkedIn />
          </Link>
        </Box>
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} OlympiFit. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
