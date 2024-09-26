import React from "react";
import logo from "../Assets/OLYMIFIT.png";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PoolIcon from "@mui/icons-material/Pool";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import InsightsIcon from "@mui/icons-material/Insights";
import "./Header.css";

const Header = () => {
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
              <Link className="nav-link text-light" to={"Progress"}>
                <Button
                  variant="outlined"
                  size="large"
                  color="success"
                  startIcon={<InsightsIcon />}
                >
                  Progress
                </Button>
              </Link>
            </li>
          </ul>
        </div>

        <div className="d-none d-lg-block">
          <Link className="nav-link text-light" to={"/Register"}>
            {/* Updated the link to '/Register' */}
            <Button variant="contained" size="large" color="success">
              Join Now
            </Button>
          </Link>
        </div>

        <div className="d-lg-none">
          <Link className="nav-link text-light" to={"/Register"}>
            <Button variant="contained" size="small" color="success">
              Join Now
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
