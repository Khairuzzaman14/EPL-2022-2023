import React, { useState, useEffect } from "react";

const Fixtures = () => {
  const [fixtures, setFixtures] = useState([]);

  const getData = async () => {
    const url =
      "https://football-web-pages1.p.rapidapi.com/fixtures-results.json?comp=1&round=1&team=1";

    const res = await fetch(url, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "910e7f07efmsh51a592a0d9a776ep192c8ajsn6af7a77bdfaa",
        "X-RapidAPI-Host": "football-web-pages1.p.rapidapi.com",
      },
    });

    const data = await res.json();
    console.log(data);

    setFixtures(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <label>
          Team:
          <select className="col-md-3"></select>
        </label>
      </div>
      <div className="row">
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default Fixtures;
