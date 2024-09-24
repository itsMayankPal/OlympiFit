import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand">OlympiFit</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active text-white" aria-current="page">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page">
                Leaderboard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active">Challenges</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <button className="btn btn-outline-success" type="submit">
              Join Us
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
// Header.js
// Header.js
// import React from "react";
// import "./Header.css"; // Custom CSS file for navbar styling
// import logo from "../Assets/OLYMIFIT.png"; // Path to your logo image

// const Header = () => {
//   return (
//     <header className="navbar">
//       <div className="navbar-container">
//         <a className="navbar-brand" href="#">
//           <img src={logo} alt="OlympiFit Logo" className="logo" />
//         </a>
//         <nav className="navbar-links">
//           <a className="nav-link" href="#">
//             Home
//           </a>
//           <a className="nav-link" href="#">
//             Challenges
//           </a>
//           <a className="nav-link" href="#">
//             Leaderboard
//           </a>
//           <a className="nav-link" href="#">
//             Profile
//           </a>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;
