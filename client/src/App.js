import "./App.css";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import Leaderboard from "./Pages/Leaderboard";
import Challenges from "./Pages/Challenges";
import Register from "./Pages/Register";
import Main from "./Main";
import { jwtDecode } from "jwt-decode"; // Import as default

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
import AboutUs from "./Pages/AboutUs";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState(null); // Store user userId

  const checkLoginStatus = () => {
    const token = localStorage.getItem("token");
    if (token) {
      console.log(token);

      // Optionally validate the token with your backend
      try {
        // Decode the token to get user information
        const decodedToken = jwtDecode(token);
        setUserId(decodedToken.userId); // Set userId based on the decoded token
        setIsAuthenticated(true);
      } catch (error) {
        console.error("Failed to decode token:", error);
      }
    }
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          index: true,
          element: <Main />,
        },
        {
          path: "/home",
          element: <Main />,
        },
        {
          path: "/dashboard/:userId",
          element: isAuthenticated ? (
            <Dashboard userId={userId} />
          ) : (
            <Navigate to="/" />
          ), // Pass userId to Dashboard
        },
        {
          path: "/leaderboard",
          element: <Leaderboard />,
        },
        {
          path: "/Dashboard",
          element: <Dashboard />,
        },
        {
          path: "/challenges",
          element: <Challenges />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/about-us",
          element: <AboutUs />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
