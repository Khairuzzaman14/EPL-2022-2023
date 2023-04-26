import React, { useState, useEffect } from "react";

const LeagueTable = () => {
  const [leagueTable, setleagueTable] = useState([]);

  const getData = async () => {
    const url =
      "https://football-web-pages1.p.rapidapi.com/league-table.json?comp=1&team=1";

    const res = await fetch(url, {
      "content-type": "application/octet-stream",
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "910e7f07efmsh51a592a0d9a776ep192c8ajsn6af7a77bdfaa",
        "X-RapidAPI-Host": "football-web-pages1.p.rapidapi.com",
      },
    });

    const data = await res.json();
    console.log(data);

    setleagueTable(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return <div>LeagueTable</div>;
};

export default LeagueTable;
