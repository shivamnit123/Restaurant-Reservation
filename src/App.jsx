import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Success from "./Pages/Success";
import ErrorPage from "./Pages/ErrorPage";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/success" element={<Success />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Toaster />
      </Router>
    </>
  );
};

export default App;
