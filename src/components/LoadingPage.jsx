// Spinner.jsx
import React from "react";
import Navbar from "./Navbar";
import "../styles/LoadingPage.css";

const LoadingPage = () => {
  return (
    <>
      <Navbar />
      <div className="spinner-overlay spinner-page">
        <div className="spinner" />
      </div>
    </>
  );
};

export default LoadingPage;
