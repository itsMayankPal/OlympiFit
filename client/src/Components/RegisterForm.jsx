import React, { useState } from "react";
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

const RegisterForm = () => {
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
      try {
        const response = await fetch("/api/users/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setFormStatus("success");
        } else {
          const data = await response.json();
          setErrorMessage(data.error || "Failed to register");
          setFormStatus("error");
        }
      } catch (error) {
        setErrorMessage("Server error");
        setFormStatus("error");
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
              <Button type="submit" variant="contained" color="primary">
                Next
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
              <Button type="submit" variant="contained" color="primary">
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
