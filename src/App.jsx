import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Fixtures from "./components/Fixtures";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import About from "./components/About";

const App = () => {
  return (
    <div className="container">
      <Header />
      <br />
      <NavBar />
      <br />
      <Routes>
        <Route path="/" element={<Navigate replace to="/fixtures" />} />
        <Route path="/about" element={<About />} />
        <Route path="/fixtures" element={<Fixtures />} />
      </Routes>
    </div>
  );
};

export default App;
