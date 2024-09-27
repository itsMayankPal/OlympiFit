import React, { useContext, useEffect } from "react"; // Import useContext
import { AuthContext } from "../AuthContext"; // Correctly import AuthContext as a named export
import logo from "../Assets/OLYMIFIT.png";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PoolIcon from "@mui/icons-material/Pool";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import "./Header.css";

const Header = () => {
  const { isAuthenticated, handleLogout, userId } = useContext(AuthContext); // Get userId from context
  const navigate = useNavigate(); // Initialize useNavigate

  // Check the authentication state
  useEffect(() => {
    console.log("Header component rendered");
    console.log("Authenticated:", isAuthenticated);
  }, [isAuthenticated]);

  const handleDashboardClick = () => {
    if (userId) {
      navigate(`/dashboard/${userId}`); // Navigate to the dashboard using userId
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-col">
      <div className="container d-flex justify-content-between">
        <Link
          className="navbar-brand d-flex justify-content-between mx-6 w-1"
          to={"/"}
        >
          <img
            src={logo}
            style={{ width: "150px", height: "150px" }}
            className="App-logo"
            alt="logo"
          />
        </Link>

        <Button
          className="navbar-toggler"
          type="button"
          variant="outlined"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="text-center">Menu</span>
        </Button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav d-flex mt-2 justify-content-center">
            <li className="nav-item mx-3">
              <Link className="nav-link text-light" to={"/"}>
                <Button
                  variant="outlined"
                  startIcon={<HomeIcon />}
                  size="large"
                  color="success"
                >
                  Home
                </Button>
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link text-light" to={"Challenges"}>
                <Button
                  variant="outlined"
                  startIcon={<PoolIcon />}
                  size="large"
                  color="success"
                >
                  Challenges
                </Button>
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link text-light" to={"Leaderboard"}>
                <Button
                  variant="outlined"
                  size="large"
                  color="success"
                  startIcon={<LeaderboardIcon />}
                >
                  Leaderboard
                </Button>
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link text-light" to={"about-us"}>
                <Button
                  variant="outlined"
                  size="large"
                  color="success"
                  startIcon={<Diversity2Icon />}
                >
                  About Us
                </Button>
              </Link>
            </li>
          </ul>
        </div>

        {/* Conditional rendering based on authentication status */}
        {isAuthenticated ? (
          <Button
            className="nav-link text-light"
            variant="contained"
            size="large"
            color="success"
            onClick={handleDashboardClick} // Use handleDashboardClick
          >
            Dashboard
          </Button>
        ) : (
          <Link className="nav-link text-light" to={"/Register"}>
            <Button variant="contained" size="large" color="success">
              Join Now
            </Button>
          </Link>
        )}

        {/* Logout button for testing */}
        {isAuthenticated && (
          <Button onClick={handleLogout} variant="outlined" color="error">
            Logout
          </Button>
        )}
      </div>
    </nav>
  );
};

export default Header;
