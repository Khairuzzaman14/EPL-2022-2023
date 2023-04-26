import React, { useState, useEffect } from "react";
import FixturesDisplay from "./FixturesDisplay";
import styles from "./Fixtures.module.css";

const WolverhamptonWonderersFixtures = () => {
  const [allPremierLeagueFixtures, setPremierLeagueFixtures] = useState([]);
  const [fixturesToShow, setFixturesToShow] = useState([]);

  const [team, setTeam] = useState(0);

  const homeFixtures = allPremierLeagueFixtures.filter((fixture) => {
    return fixture["home-team"].name === "Wolverhampton Wanderers";
  });

  const awayFixtures = allPremierLeagueFixtures.filter((fixture) => {
    return fixture["away-team"].name === "Wolverhampton Wanderers";
  });

  const handleAllFixtureChange = () => {
    setFixturesToShow(allPremierLeagueFixtures);
  };

  const handleHomeFixtureChange = () => {
    setFixturesToShow(homeFixtures);
  };

  const handleAwayFixtureChange = () => {
    setFixturesToShow(awayFixtures);
  };

  const getPremierLeagueFixtures = async () => {
    const url =
      "https://football-web-pages1.p.rapidapi.com/fixtures-results.json?comp=1&round=1&team=44";

    const res = await fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/octet-stream",
        "X-RapidAPI-Key": "910e7f07efmsh51a592a0d9a776ep192c8ajsn6af7a77bdfaa",
        "X-RapidAPI-Host": "football-web-pages1.p.rapidapi.com",
      },
    });

    const data = await res.json();

    const premierLeagueFixtures = data["fixtures-results"].matches.filter(
      (fixture) => {
        return fixture.competition.name === "Premier League";
      }
    );
    console.log(premierLeagueFixtures);

    setPremierLeagueFixtures(premierLeagueFixtures);
    setFixturesToShow(premierLeagueFixtures);
  };

  useEffect(() => {
    getPremierLeagueFixtures();
  }, []);

  return (
    <div className="container">
      <div className={styles.team}>
        <h1>Wolverhampton Wonderers</h1>
      </div>

      <FixturesDisplay
        handleAllFixtureChange={handleAllFixtureChange}
        handleHomeFixtureChange={handleHomeFixtureChange}
        handleAwayFixtureChange={handleAwayFixtureChange}
        selectedFixtures={fixturesToShow}
      />
    </div>
  );
};

export default WolverhamptonWonderersFixtures;
