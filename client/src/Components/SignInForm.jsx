import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  TextField,
  Box,
  Typography,
  Container,
  Card,
  Alert,
} from "@mui/material";
import { AuthContext } from "../AuthContext"; // Import AuthContext

const SignInForm = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext); // Get login function from context
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [formStatus, setFormStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setFormData({
      email: "",
      password: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(""); // Reset error message before submission

    try {
      const response = await fetch("http://localhost:3002/api/users/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setFormStatus("success");
        resetForm();
        localStorage.setItem("token", data.token); // Store token in local storage
        localStorage.setItem("userId", data.userId); // Store userId in local storage
        login(data.token, data.userId); // Call the login function from context
        navigate(`/dashboard/${data.userId}`); // Redirect to the dashboard
      } else {
        setErrorMessage(data.error || "Failed to sign in");
        setFormStatus("error");
      }
    } catch (error) {
      setErrorMessage("Server error. Please try again later.");
      setFormStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderFinalMessage = () => {
    if (formStatus === "success") {
      return <Alert severity="success">Sign in successful!</Alert>;
    } else if (formStatus === "error") {
      return <Alert severity="error">{errorMessage}</Alert>;
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "50px" }}>
      <Card
        style={{
          padding: "40px 20px",
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
          background: "linear-gradient(135deg, #f0f8ff 0%, #6495ed 100%)",
        }}
      >
        <Typography variant="h6">Sign In</Typography>
        <form onSubmit={handleSubmit}>
          <Box mb={3}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              variant="outlined"
              required
            />
          </Box>
          <Box mb={3}>
            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              variant="outlined"
              required
            />
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Button
              variant="outlined"
              onClick={resetForm}
              disabled={isSubmitting}
            >
              Reset
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isSubmitting}
            >
              Sign In
            </Button>
          </Box>
        </form>
        {renderFinalMessage()}
      </Card>
    </Container>
  );
};

export default SignInForm;
