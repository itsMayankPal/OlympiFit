// Home Page

import React from "react";

import "./App.css"; // Assuming your styles are in App.css
import History from "./Components/History";
import Features from "./Components/Feature";
import Faqs from "./Components/Faqs";
import MainContent from "./Components/MainContent";
import Footer from "./Components/Footer";

function Main() {
  return (
    <>
      <MainContent />
      <History></History>
      <Features></Features>
      <Faqs></Faqs>
      <Footer></Footer>
    </>
  );
}

export default Main;
