import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Header from "./components/Header";
import NavBar from "./components/NavBar";
import About from "./components/About";
import ArsenalFixtures from "./fixtures/ArsenalFixtures";
import AstonVillaFixtures from "./fixtures/AstonVillaFixtures";
import ChelseaFixtures from "./fixtures/ChelseaFixtures";
import CrystalPalaceFixtures from "./fixtures/CrystalPalaceFixtures";
import EvertonFixtures from "./fixtures/EvertonFixtures";
import FulhamFixtures from "./fixtures/FulhamFixtures";
import LiverpoolFixtures from "./fixtures/LiverpoolFixtures";
import ManchesterCityFixtures from "./fixtures/ManchesterCityFixtures";
import ManchesterUnitedFixtures from "./fixtures/ManchesterUnitedFixtures";
import NewcastleUnitedFixtures from "./fixtures/NewcastleUnited";
import SouthamptonFixtures from "./fixtures/SouthamptonFixtures";
import TottenhamHotspurFixtures from "./fixtures/TottenhamHotspurFixtures";
import BrightonHoveAlbionFixtures from "./fixtures/BrightonHoveAlbionFixtures";
import LeedsUnitedFixtures from "./fixtures/LeedsUnitedFixtures";
import LeicesterCityFixtures from "./fixtures/LeicesterCityFixtures";
import NottinghamForestFixtures from "./fixtures/NottinghamForestFixtures";
import WestHamUnitedFixtures from "./fixtures/WestHamUnitedFixtures";
import WolverhamptonWonderersFixtures from "./fixtures/WolverhamptonWonderersFixtures";
import AFCBournemouthFixtures from "./fixtures/AFCBournemouthFixtures";
import BrentfordFixtures from "./fixtures/BrentfordFixtures";
import Teams from "./components/Teams";

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
        <Route path="/fixtures" element={<Teams />} />
        <Route path="/arsenal" element={<ArsenalFixtures />} />
        <Route path="/astonvilla" element={<AstonVillaFixtures />} />
        <Route path="/bournemouth" element={<AFCBournemouthFixtures />} />
        <Route path="/brentford" element={<BrentfordFixtures />} />
        <Route path="/brighton" element={<BrightonHoveAlbionFixtures />} />
        <Route path="/chelsea" element={<ChelseaFixtures />} />
        <Route path="/crystalpalace" element={<CrystalPalaceFixtures />} />
        <Route path="/everton" element={<EvertonFixtures />} />
        <Route path="/fulham" element={<FulhamFixtures />} />
        <Route path="/leicester" element={<LeicesterCityFixtures />} />
        <Route path="/leeds" element={<LeedsUnitedFixtures />} />
        <Route path="/liverpool" element={<LiverpoolFixtures />} />
        <Route path="/mancity" element={<ManchesterCityFixtures />} />
        <Route path="/manunited" element={<ManchesterUnitedFixtures />} />
        <Route path="/newcastle" element={<NewcastleUnitedFixtures />} />
        <Route
          path="/nottinghamforest"
          element={<NottinghamForestFixtures />}
        />
        <Route path="/southampton" element={<SouthamptonFixtures />} />
        <Route path="/spurs" element={<TottenhamHotspurFixtures />} />
        <Route path="/westham" element={<WestHamUnitedFixtures />} />
        <Route path="/wolves" element={<WolverhamptonWonderersFixtures />} />
      </Routes>
    </div>
  );
};

export default App;
