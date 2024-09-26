import "./App.css";

import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import Leaderboard from "./Pages/Leaderboard";
import Challenges from "./Pages/Challenges";
import Register from "./Pages/Register";
import Main from "./Main";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
        path: "Dashboard",
        element: <Dashboard />,
      },
      {
        path: "Leaderboard",
        element: <Leaderboard />,
      },
      {
        path: "Challenges",
        element: <Challenges />,
      },
      {
        path: "Register",
        element: <Register />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
