import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"; // Update to useNavigate
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Box,
  Typography,
  Container,
  Card,
  Alert,
} from "@mui/material";

const steps = ["Register", "Personal Details"];

const RegisterForm = ({ onSuccess }) => {
  // Accept onSuccess prop
  // const navigate = useNavigate(); // Initialize useNavigate
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    age: "",
    weight: "",
    gender: "",
    height: "",
    targetWeight: "",
    targetMonths: "",
  });

  const [formStatus, setFormStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      age: "",
      weight: "",
      gender: "",
      height: "",
      targetWeight: "",
      targetMonths: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (activeStep === steps.length - 1) {
      if (formData.password !== formData.confirmPassword) {
        setErrorMessage("Passwords do not match!");
        setFormStatus("error");
        return;
      }

      // Send form data to the backend
      setIsSubmitting(true);
      try {
        const response = await fetch(
          "http://localhost:3002/api/users/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        const data = await response.json();

        if (response.ok) {
          setFormStatus("success");
          resetForm();
          onSuccess(); // Call the onSuccess function to toggle to sign-in
        } else {
          setErrorMessage(data.error || "Failed to register");
          setFormStatus("error");
        }
      } catch (error) {
        setErrorMessage("Server error. Please try again later.");
        setFormStatus("error");
      } finally {
        setIsSubmitting(false);
      }
    } else {
      handleNext();
    }
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const renderStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return (
          <form onSubmit={handleSubmit}>
            <Typography variant="h6">Registration Form</Typography>
            <Box mb={3}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                variant="outlined"
                required
              />
            </Box>
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
            <Box mb={3}>
              <TextField
                fullWidth
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                variant="outlined"
                required
              />
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Button disabled={activeStep === 0} onClick={handleBack}>
                Back
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={isSubmitting}
              >
                {activeStep === steps.length - 1 ? "Submit" : "Next"}
              </Button>
            </Box>
          </form>
        );
      case 1:
        return (
          <form onSubmit={handleSubmit}>
            <Typography variant="h6">Personal Details</Typography>
            <Box mb={3}>
              <TextField
                fullWidth
                label="Age"
                name="age"
                type="number"
                value={formData.age}
                onChange={handleChange}
                variant="outlined"
                required
                InputProps={{
                  inputProps: { min: 1 },
                }}
              />
            </Box>
            <Box mb={3}>
              <TextField
                fullWidth
                label="Weight (kg)"
                name="weight"
                type="number"
                value={formData.weight}
                onChange={handleChange}
                variant="outlined"
                required
                InputProps={{
                  inputProps: { min: 1 },
                }}
              />
            </Box>
            <Box mb={3}>
              <FormControl fullWidth required>
                <InputLabel id="gender-label">Gender</InputLabel>
                <Select
                  labelId="gender-label"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  label="Gender"
                >
                  <MenuItem value={"Male"}>Male</MenuItem>
                  <MenuItem value={"Female"}>Female</MenuItem>
                  <MenuItem value={"Other"}>Other</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box mb={3}>
              <TextField
                fullWidth
                label="Height (cm)"
                name="height"
                type="number"
                value={formData.height}
                onChange={handleChange}
                variant="outlined"
                required
                InputProps={{
                  inputProps: { min: 1 },
                }}
              />
            </Box>
            <Box mb={3}>
              <TextField
                fullWidth
                label="Target Weight (kg)"
                name="targetWeight"
                type="number"
                value={formData.targetWeight}
                onChange={handleChange}
                variant="outlined"
                required
                InputProps={{
                  inputProps: { min: 1 },
                }}
              />
            </Box>
            <Box mb={3}>
              <TextField
                fullWidth
                label="Target Months"
                name="targetMonths"
                type="number"
                value={formData.targetMonths}
                onChange={handleChange}
                variant="outlined"
                required
                InputProps={{
                  inputProps: { min: 1 },
                }}
              />
            </Box>

            <Box display="flex" justifyContent="space-between">
              <Button onClick={handleBack}>Back</Button>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={isSubmitting}
              >
                Submit
              </Button>
            </Box>
          </form>
        );
      default:
        return "Unknown Step";
    }
  };

  const renderFinalMessage = () => {
    if (formStatus === "success") {
      return <Alert severity="success">Registration successful!</Alert>;
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
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <Box mt={4}>
          {activeStep === steps.length
            ? renderFinalMessage()
            : renderStepContent(activeStep)}
        </Box>
      </Card>
    </Container>
  );
};

export default RegisterForm;
