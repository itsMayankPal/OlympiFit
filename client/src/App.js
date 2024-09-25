import "./App.css";

import Home from "./Pages/Home";
import Progress from "./Pages/Progress";
import Leaderboard from "./Pages/Leaderboard";
import Challenges from "./Pages/Challenges";
import Main from "./Main";

// import User from './components/User';

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
        path: "Progress", // relative path
        element: <Progress />,
      },
      {
        path: "Leaderboard", // relative path
        element: <Leaderboard />,
      },
      {
        path: "Challenges", // relative path
        element: <Challenges />,
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
