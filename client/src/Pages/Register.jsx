import React, { useState } from "react";
import RegisterForm from "../Components/RegisterForm"; // Assuming the form is in the components folder
import SignInForm from "../Components/SignInForm"; // Import the new SignInForm component
import { Button } from "@mui/material";

const Register = () => {
  const [isSignUp, setIsSignUp] = useState(true); // State to track if the user is signing up or signing in

  const toggleForm = () => {
    setIsSignUp((prev) => !prev); // Toggle between Sign Up and Sign In
  };

  const handleRegistrationSuccess = () => {
    setIsSignUp(false); // Switch to Sign In form after successful registration
  };

  return (
    <div style={styles.container}>
      <h1 className="text-center mt-4">{isSignUp ? "Join Now" : "Sign In"}</h1>
      <Button
        onClick={toggleForm}
        variant="contained"
        color="primary"
        style={styles.button}
      >
        {isSignUp ? "Switch to Sign In" : "Switch to Sign Up"}
      </Button>
      {isSignUp ? (
        <RegisterForm onSuccess={handleRegistrationSuccess} />
      ) : (
        <SignInForm />
      )}
    </div>
  );
};

// CSS styles for centering
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    textAlign: "center",
  },
  button: {
    margin: "20px 0",
  },
};

export default Register;
