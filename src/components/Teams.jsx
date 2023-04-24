import React, { useState, useEffect } from "react";

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

  return <div>Teams</div>;
};

export default Teams;
