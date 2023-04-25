import React from "react";
import styles from "./FixturesDisplay.module.css";

const FixturesDisplay = (props) => {
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>Match</th>
            <th>Date</th>
            <th>Venue</th>
            <th>Attendance</th>
            <th>Time</th>
            <th>Home Team</th>
            <th>Away Team</th>
            <th>Home Team half-time score</th>
            <th>Away Team half-time score</th>
            <th>Home Team full-time score</th>
            <th>Away Team full-time score</th>
          </tr>
        </thead>
        <tbody>
          {props.fixtures.map((item, key) => {
            if (item.competition.name.includes("Premier League")) {
              return (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{item.date}</td>
                  <td>{item.venue}</td>
                  <td>{item.attendance}</td>
                  <td>{item.time}</td>
                  <td>{item["home-team"].name}</td>
                  <td>{item["away-team"].name}</td>
                  <td>{item["home-team"]["half-time-score"]}</td>
                  <td>{item["away-team"]["half-time-score"]}</td>
                  <td>{item["home-team"].score}</td>
                  <td>{item["away-team"].score}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
};

export default FixturesDisplay;
