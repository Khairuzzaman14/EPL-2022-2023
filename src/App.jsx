import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Fixtures from "./components/Fixtures";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Teams from "./components/Teams";
import LeagueTable from "./components/LeagueTable";

const App = () => {
  return (
    <div className="container">
      <Header />
      <br />
      <NavBar />
      <br />
      <Routes>
        <Route path="/" element={<Navigate replace to="/fixtures" />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/fixtures" element={<Fixtures />} />
        <Route path="/leagueTable" element={<LeagueTable />} />
      </Routes>
    </div>
  );
};

export default App;