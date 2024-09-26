import React from "react";
import Header from "../Components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div>
      <Header></Header>

      <Outlet></Outlet>
      <Footer />
    </div>
  );
}

export default Home;
