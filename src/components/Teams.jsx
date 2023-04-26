import React from "react";
import { Link } from "react-router-dom";

const Teams = () => {
  return (
    <div>
      Teams
      <ul>
        <li>
          <Link to="/arsenal">Arsenal</Link>
        </li>
        <li>
          <Link to="/astonvilla">Aston Villa</Link>
        </li>
        <li>
          <Link to="/bournemouth">Bournemouth</Link>
        </li>
        <li>
          <Link to="/brentford">Brentford</Link>
        </li>
        <li>
          <Link to="/brighton">Brighton & Hove Albion</Link>
        </li>
        <li>
          <Link to="/chelsea">Chelsea</Link>
        </li>
        <li>
          <Link to="/crystalpalace">Crystal Palace</Link>
        </li>
        <li>
          <Link to="/everton">Everton</Link>
        </li>
        <li>
          <Link to="/fulham">Fulham</Link>
        </li>
        <li>
          <Link to="/leicester">Leicester City</Link>
        </li>
        <li>
          <Link to="/leeds">Leeds United</Link>
        </li>
        <li>
          <Link to="/liverpool">Liverpool</Link>
        </li>
        <li>
          <Link to="/mancity">Manchester City</Link>
        </li>
        <li>
          <Link to="/manunited">Manchester United</Link>
        </li>
        <li>
          <Link to="/newcastle">Newcastle United</Link>
        </li>
        <li>
          <Link to="/nottinghamforest">Nottingham Forest</Link>
        </li>
        <li>
          <Link to="/southampton">Southampton</Link>
        </li>
        <li>
          <Link to="/spurs">Tottenham Hotspur</Link>
        </li>
        <li>
          <Link to="/westham">West Ham United</Link>
        </li>
        <li>
          <Link to="/wolves">Wolverhampton Wonderers</Link>
        </li>
      </ul>
    </div>
  );
};

export default Teams;
