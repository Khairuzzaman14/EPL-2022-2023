import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Teams = () => {
  const [teams, setTeams] = useState([]);

  const getData = async () => {
    const url = "https://football-web-pages1.p.rapidapi.com/teams.json?comp=1";

    const res = await fetch(url, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "910e7f07efmsh51a592a0d9a776ep192c8ajsn6af7a77bdfaa",
        "X-RapidAPI-Host": "football-web-pages1.p.rapidapi.com",
      },
    });

    const data = await res.json();
    console.log(data);

    setTeams(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2">Name</div>
      </div>

      <ul>
        <li>
          <Link to="/teams/id">Details of</Link>
        </li>
      </ul>
    </div>
  );
};

export default Teams;
