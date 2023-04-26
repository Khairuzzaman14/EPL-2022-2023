import React, { useState, useEffect } from "react";
import FixturesDisplay from "./FixturesDisplay";
import styles from "./Fixtures.module.css";

const ArsenalFixtures = () => {
  // const matches = [
  //   {
  //     date: "2022-08-05",
  //     venue: "Selhurst Park",
  //     competition: { name: "Premier League", id: 1 },
  //     id: 407893,
  //     time: "20:00",
  //     "home-team": {
  //       score: 0,
  //       "half-time-score": 0,
  //       name: "Crystal Palace",
  //       id: 8,
  //     },
  //     referee: "Anthony Taylor",
  //     "away-team": { score: 2, "half-time-score": 1, name: "Arsenal", id: 1 },
  //     attendance: 25286,
  //     status: { short: "FT", full: "Full Time" },
  //   },
  //   {
  //     date: "2022-08-13",
  //     venue: "Emirates Stadium",
  //     competition: { name: "Premier League", id: 1 },
  //     id: 407904,
  //     time: "15:00",
  //     "home-team": { score: 4, "half-time-score": 2, name: "Arsenal", id: 1 },
  //     referee: "England Darren",
  //     "away-team": {
  //       score: 2,
  //       "half-time-score": 0,
  //       name: "Leicester City",
  //       id: 30,
  //     },
  //     attendance: 60033,
  //     status: { short: "FT", full: "Full Time" },
  //   },
  //   {
  //     date: "2022-08-20",
  //     venue: "Vitality Stadium",
  //     competition: { name: "Premier League", id: 1 },
  //     id: 407894,
  //     time: "17:30",
  //     "home-team": {
  //       score: 0,
  //       "half-time-score": 0,
  //       name: "AFC Bournemouth",
  //       id: 47,
  //     },
  //     referee: "Craig Pawson",
  //     "away-team": { score: 3, "half-time-score": 2, name: "Arsenal", id: 1 },
  //     attendance: 10423,
  //     status: { short: "FT", full: "Full Time" },
  //   },
  //   {
  //     date: "2022-08-27",
  //     venue: "Emirates Stadium",
  //     competition: { name: "Premier League", id: 1 },
  //     id: 407864,
  //     time: "17:30",
  //     "home-team": { score: 2, "half-time-score": 0, name: "Arsenal", id: 1 },
  //     referee: "Jarred Gillett",
  //     "away-team": { score: 1, "half-time-score": 0, name: "Fulham", id: 10 },
  //     attendance: 60164,
  //     status: { short: "FT", full: "Full Time" },
  //   },
  //   {
  //     date: "2022-08-31",
  //     venue: "Emirates Stadium",
  //     competition: { name: "Premier League", id: 1 },
  //     id: 413623,
  //     time: "19:30",
  //     "home-team": { score: 2, "half-time-score": 1, name: "Arsenal", id: 1 },
  //     referee: "Robert Jones",
  //     "away-team": {
  //       score: 1,
  //       "half-time-score": 0,
  //       name: "Aston Villa",
  //       id: 2,
  //     },
  //     attendance: 60012,
  //     status: { short: "FT", full: "Full Time" },
  //   },
  //   {
  //     date: "2022-09-04",
  //     venue: "Old Trafford",
  //     competition: { name: "Premier League", id: 1 },
  //     id: 413669,
  //     time: "16:30",
  //     "home-team": {
  //       score: 3,
  //       "half-time-score": 1,
  //       name: "Manchester United",
  //       id: 13,
  //     },
  //     referee: "Paul Tierney",
  //     "away-team": { score: 1, "half-time-score": 0, name: "Arsenal", id: 1 },
  //     attendance: 73431,
  //     status: { short: "FT", full: "Full Time" },
  //   },
  //   {
  //     date: "2022-09-18",
  //     venue: "Gtech Community Stadium",
  //     competition: { name: "Premier League", id: 1 },
  //     id: 413671,
  //     time: "12:00",
  //     "home-team": {
  //       score: 0,
  //       "half-time-score": 0,
  //       name: "Brentford",
  //       id: 49,
  //     },
  //     referee: "David Coote",
  //     "away-team": { score: 3, "half-time-score": 2, name: "Arsenal", id: 1 },
  //     attendance: 17122,
  //     status: { short: "FT", full: "Full Time" },
  //   },
  //   {
  //     date: "2022-10-01",
  //     venue: "Emirates Stadium",
  //     competition: { name: "Premier League", id: 1 },
  //     id: 407994,
  //     time: "12:30",
  //     "home-team": { score: 3, "half-time-score": 1, name: "Arsenal", id: 1 },
  //     referee: "Anthony Taylor",
  //     "away-team": {
  //       score: 1,
  //       "half-time-score": 1,
  //       name: "Tottenham Hotspur",
  //       id: 19,
  //     },
  //     attendance: 60278,
  //     status: { short: "FT", full: "Full Time" },
  //   },
  //   {
  //     date: "2022-10-09",
  //     venue: "Emirates Stadium",
  //     competition: { name: "Premier League", id: 1 },
  //     id: 422544,
  //     time: "16:30",
  //     "home-team": { score: 3, "half-time-score": 2, name: "Arsenal", id: 1 },
  //     referee: "Michael Oliver",
  //     "away-team": {
  //       score: 2,
  //       "half-time-score": 1,
  //       name: "Liverpool",
  //       id: 11,
  //     },
  //     attendance: 59968,
  //     status: { short: "FT", full: "Full Time" },
  //   },
  //   {
  //     date: "2022-10-16",
  //     venue: "Elland Road",
  //     competition: { name: "Premier League", id: 1 },
  //     id: 422550,
  //     time: "14:00",
  //     "home-team": {
  //       score: 0,
  //       "half-time-score": 0,
  //       name: "Leeds United",
  //       id: 29,
  //     },
  //     referee: "Chris Kavanagh",
  //     "away-team": { score: 1, "half-time-score": 1, name: "Arsenal", id: 1 },
  //     attendance: 36700,
  //     status: { short: "FT", full: "Full Time" },
  //   },
  //   {
  //     date: "2022-10-23",
  //     venue: "St. Mary's Stadium",
  //     competition: { name: "Premier League", id: 1 },
  //     id: 422557,
  //     time: "14:00",
  //     "home-team": {
  //       score: 1,
  //       "half-time-score": 0,
  //       name: "Southampton",
  //       id: 18,
  //     },
  //     referee: "Robert Jones",
  //     "away-team": { score: 1, "half-time-score": 1, name: "Arsenal", id: 1 },
  //     attendance: 31145,
  //     status: { short: "FT", full: "Full Time" },
  //   },
  //   {
  //     date: "2022-10-30",
  //     venue: "Emirates Stadium",
  //     competition: { name: "Premier League", id: 1 },
  //     id: 422560,
  //     time: "14:00",
  //     "home-team": { score: 5, "half-time-score": 1, name: "Arsenal", id: 1 },
  //     referee: "Simon Hooper",
  //     "away-team": {
  //       score: 0,
  //       "half-time-score": 0,
  //       name: "Nottingham Forest",
  //       id: 32,
  //     },
  //     attendance: 60263,
  //     status: { short: "FT", full: "Full Time" },
  //   },
  //   {
  //     date: "2022-11-06",
  //     venue: "Stamford Bridge",
  //     competition: { name: "Premier League", id: 1 },
  //     id: 425336,
  //     time: "12:00",
  //     "home-team": { score: 0, "half-time-score": 0, name: "Chelsea", id: 7 },
  //     referee: "Michael Oliver",
  //     "away-team": { score: 1, "half-time-score": 0, name: "Arsenal", id: 1 },
  //     attendance: 40142,
  //     status: { short: "FT", full: "Full Time" },
  //   },
  //   {
  //     date: "2022-11-12",
  //     venue: "Molineux Stadium",
  //     competition: { name: "Premier League", id: 1 },
  //     id: 408023,
  //     time: "19:45",
  //     "home-team": {
  //       score: 0,
  //       "half-time-score": 0,
  //       name: "Wolverhampton Wanderers",
  //       id: 44,
  //     },
  //     referee: "Stuart Attwell",
  //     "away-team": { score: 2, "half-time-score": 0, name: "Arsenal", id: 1 },
  //     attendance: 31523,
  //     status: { short: "FT", full: "Full Time" },
  //   },
  //   {
  //     date: "2022-12-26",
  //     venue: "Emirates Stadium",
  //     competition: { name: "Premier League", id: 1 },
  //     id: 408034,
  //     time: "20:00",
  //     "home-team": { score: 3, "half-time-score": 0, name: "Arsenal", id: 1 },
  //     referee: "Michael Oliver",
  //     "away-team": {
  //       score: 1,
  //       "half-time-score": 1,
  //       name: "West Ham United",
  //       id: 42,
  //     },
  //     attendance: 60125,
  //     status: { short: "FT", full: "Full Time" },
  //   },
  //   {
  //     date: "2022-12-31",
  //     venue: "The American Express Community Stadium",
  //     competition: { name: "Premier League", id: 1 },
  //     id: 408025,
  //     time: "17:30",
  //     "home-team": {
  //       score: 2,
  //       "half-time-score": 0,
  //       name: "Brighton & Hove Albion",
  //       id: 21,
  //     },
  //     referee: "Anthony Taylor",
  //     "away-team": { score: 4, "half-time-score": 2, name: "Arsenal", id: 1 },
  //     attendance: 31647,
  //     status: { short: "FT", full: "Full Time" },
  //   },
  //   {
  //     date: "2023-01-03",
  //     venue: "Emirates Stadium",
  //     competition: { name: "Premier League", id: 1 },
  //     id: 426620,
  //     time: "19:45",
  //     "home-team": { score: 0, "half-time-score": 0, name: "Arsenal", id: 1 },
  //     referee: "Andy Madley",
  //     "away-team": {
  //       score: 0,
  //       "half-time-score": 0,
  //       name: "Newcastle United",
  //       id: 15,
  //     },
  //     attendance: 60319,
  //     status: { short: "FT", full: "Full Time" },
  //   },
  //   {
  //     date: "2023-01-15",
  //     venue: "Tottenham Hotspur Stadium",
  //     competition: { name: "Premier League", id: 1 },
  //     id: 427466,
  //     time: "16:30",
  //     "home-team": {
  //       score: 0,
  //       "half-time-score": 0,
  //       name: "Tottenham Hotspur",
  //       id: 19,
  //     },
  //     referee: "Craig Pawson",
  //     "away-team": { score: 2, "half-time-score": 2, name: "Arsenal", id: 1 },
  //     attendance: 61870,
  //     status: { short: "FT", full: "Full Time" },
  //   },
  //   {
  //     date: "2023-01-22",
  //     venue: "Emirates Stadium",
  //     competition: { name: "Premier League", id: 1 },
  //     id: 427463,
  //     time: "16:30",
  //     "home-team": { score: 3, "half-time-score": 1, name: "Arsenal", id: 1 },
  //     referee: "Anthony Taylor",
  //     "away-team": {
  //       score: 2,
  //       "half-time-score": 1,
  //       name: "Manchester United",
  //       id: 13,
  //     },
  //     attendance: 60325,
  //     status: { short: "FT", full: "Full Time" },
  //   },
  //   {
  //     date: "2023-02-04",
  //     venue: "Goodison Park",
  //     competition: { name: "Premier League", id: 1 },
  //     id: 408078,
  //     time: "12:30",
  //     "home-team": { score: 1, "half-time-score": 0, name: "Everton", id: 9 },
  //     referee: "David Coote",
  //     "away-team": { score: 0, "half-time-score": 0, name: "Arsenal", id: 1 },
  //     attendance: 39314,
  //     status: { short: "FT", full: "Full Time" },
  //   },
  //   {
  //     date: "2023-02-11",
  //     venue: "Emirates Stadium",
  //     competition: { name: "Premier League", id: 1 },
  //     id: 408084,
  //     time: "15:00",
  //     "home-team": { score: 1, "half-time-score": 0, name: "Arsenal", id: 1 },
  //     referee: "Peter Bankes",
  //     "away-team": {
  //       score: 1,
  //       "half-time-score": 0,
  //       name: "Brentford",
  //       id: 49,
  //     },
  //     attendance: 60254,
  //     status: { short: "FT", full: "Full Time" },
  //   },
  //   {
  //     date: "2023-02-15",
  //     venue: "Emirates Stadium",
  //     competition: { name: "Premier League", id: 1 },
  //     id: 427804,
  //     time: "19:30",
  //     "home-team": { score: 1, "half-time-score": 1, name: "Arsenal", id: 1 },
  //     referee: "Anthony Taylor",
  //     "away-team": {
  //       score: 3,
  //       "half-time-score": 1,
  //       name: "Manchester City",
  //       id: 12,
  //     },
  //     attendance: 60276,
  //     status: { short: "FT", full: "Full Time" },
  //   },
  //   {
  //     date: "2023-02-18",
  //     venue: "Villa Park",
  //     competition: { name: "Premier League", id: 1 },
  //     id: 408094,
  //     time: "12:30",
  //     "home-team": {
  //       score: 2,
  //       "half-time-score": 2,
  //       name: "Aston Villa",
  //       id: 2,
  //     },
  //     referee: "Simon Hooper",
  //     "away-team": { score: 4, "half-time-score": 1, name: "Arsenal", id: 1 },
  //     attendance: 42066,
  //     status: { short: "FT", full: "Full Time" },
  //   },
  //   {
  //     date: "2023-02-25",
  //     venue: "King Power Stadium",
  //     competition: { name: "Premier League", id: 1 },
  //     id: 408109,
  //     time: "15:00",
  //     "home-team": {
  //       score: 0,
  //       "half-time-score": 0,
  //       name: "Leicester City",
  //       id: 30,
  //     },
  //     referee: "Craig Pawson",
  //     "away-team": { score: 1, "half-time-score": 0, name: "Arsenal", id: 1 },
  //     attendance: 32227,
  //     status: { short: "FT", full: "Full Time" },
  //   },
  //   {
  //     date: "2023-03-01",
  //     venue: "Emirates Stadium",
  //     competition: { name: "Premier League", id: 1 },
  //     id: 455636,
  //     time: "19:45",
  //     "home-team": { score: 4, "half-time-score": 2, name: "Arsenal", id: 1 },
  //     referee: "Michael Oliver",
  //     "away-team": { score: 0, "half-time-score": 0, name: "Everton", id: 9 },
  //     attendance: 60213,
  //     status: { short: "FT", full: "Full Time" },
  //   },
  //   {
  //     date: "2023-03-04",
  //     venue: "Emirates Stadium",
  //     competition: { name: "Premier League", id: 1 },
  //     id: 408114,
  //     time: "15:00",
  //     "home-team": { score: 3, "half-time-score": 0, name: "Arsenal", id: 1 },
  //     referee: "Chris Kavanagh",
  //     "away-team": {
  //       score: 2,
  //       "half-time-score": 1,
  //       name: "AFC Bournemouth",
  //       id: 47,
  //     },
  //     attendance: 60222,
  //     status: { short: "FT", full: "Full Time" },
  //   },
  //   {
  //     date: "2023-03-12",
  //     venue: "Craven Cottage",
  //     competition: { name: "Premier League", id: 1 },
  //     id: 455215,
  //     time: "14:00",
  //     "home-team": { score: 0, "half-time-score": 0, name: "Fulham", id: 10 },
  //     referee: "David Coote",
  //     "away-team": { score: 3, "half-time-score": 3, name: "Arsenal", id: 1 },
  //     attendance: 24426,
  //     status: { short: "FT", full: "Full Time" },
  //   },
  //   {
  //     date: "2023-03-19",
  //     venue: "Emirates Stadium",
  //     competition: { name: "Premier League", id: 1 },
  //     id: 455218,
  //     time: "14:00",
  //     "home-team": { score: 4, "half-time-score": 2, name: "Arsenal", id: 1 },
  //     referee: "Stuart Attwell",
  //     "away-team": {
  //       score: 1,
  //       "half-time-score": 0,
  //       name: "Crystal Palace",
  //       id: 8,
  //     },
  //     attendance: 60247,
  //     status: { short: "FT", full: "Full Time" },
  //   },
  //   {
  //     date: "2023-04-01",
  //     venue: "Emirates Stadium",
  //     competition: { name: "Premier League", id: 1 },
  //     id: 408147,
  //     time: "15:00",
  //     "home-team": { score: 4, "half-time-score": 1, name: "Arsenal", id: 1 },
  //     referee: "England Darren",
  //     "away-team": {
  //       score: 1,
  //       "half-time-score": 0,
  //       name: "Leeds United",
  //       id: 29,
  //     },
  //     attendance: 60283,
  //     status: { short: "FT", full: "Full Time" },
  //   },
  //   {
  //     date: "2023-04-09",
  //     venue: "Anfield",
  //     competition: { name: "Premier League", id: 1 },
  //     id: 455911,
  //     time: "16:30",
  //     "home-team": {
  //       score: 2,
  //       "half-time-score": 1,
  //       name: "Liverpool",
  //       id: 11,
  //     },
  //     referee: "Paul Tierney",
  //     "away-team": { score: 2, "half-time-score": 2, name: "Arsenal", id: 1 },
  //     attendance: 53267,
  //     status: { short: "FT", full: "Full Time" },
  //   },
  //   {
  //     date: "2023-04-16",
  //     venue: "London Stadium",
  //     competition: { name: "Premier League", id: 1 },
  //     id: 455915,
  //     time: "14:00",
  //     "home-team": {
  //       score: 2,
  //       "half-time-score": 1,
  //       name: "West Ham United",
  //       id: 42,
  //     },
  //     referee: "David Coote",
  //     "away-team": { score: 2, "half-time-score": 2, name: "Arsenal", id: 1 },
  //     attendance: 62475,
  //     status: { short: "FT", full: "Full Time" },
  //   },
  //   {
  //     date: "2023-04-21",
  //     venue: "Emirates Stadium",
  //     competition: { name: "Premier League", id: 1 },
  //     id: 455916,
  //     time: "20:00",
  //     "home-team": { score: 3, "half-time-score": 1, name: "Arsenal", id: 1 },
  //     referee: "Simon Hooper",
  //     "away-team": {
  //       score: 3,
  //       "half-time-score": 2,
  //       name: "Southampton",
  //       id: 18,
  //     },
  //     attendance: 60175,
  //     status: { short: "FT", full: "Full Time" },
  //   },
  //   {
  //     date: "2023-04-26",
  //     venue: "Etihad Stadium",
  //     competition: { name: "Premier League", id: 1 },
  //     id: 408146,
  //     time: "20:00",
  //     "home-team": { score: 0, name: "Manchester City", id: 12 },
  //     referee: "M. Oliver",
  //     "away-team": { score: 0, name: "Arsenal", id: 1 },
  //     attendance: 0,
  //     status: { short: "8pm", full: "Kick off 8pm" },
  //   },
  //   {
  //     date: "2023-05-02",
  //     venue: "Emirates Stadium",
  //     competition: { name: "Premier League", id: 1 },
  //     id: 457133,
  //     time: "20:00",
  //     "home-team": { score: 0, name: "Arsenal", id: 1 },
  //     referee: "R. Jones",
  //     "away-team": { score: 0, name: "Chelsea", id: 7 },
  //     attendance: 0,
  //     status: { short: "8pm", full: "Kick off 8pm" },
  //   },
  //   {
  //     date: "2023-05-07",
  //     venue: "St. James' Park",
  //     competition: { name: "Premier League", id: 1 },
  //     id: 456844,
  //     time: "16:30",
  //     "home-team": { score: 0, name: "Newcastle United", id: 15 },
  //     "away-team": { score: 0, name: "Arsenal", id: 1 },
  //     attendance: 0,
  //     status: { short: "4.30pm", full: "Kick off 4.30pm" },
  //   },
  //   {
  //     date: "2023-05-14",
  //     venue: "Emirates Stadium",
  //     competition: { name: "Premier League", id: 1 },
  //     id: 457056,
  //     time: "16:30",
  //     "home-team": { score: 0, name: "Arsenal", id: 1 },
  //     "away-team": { score: 0, name: "Brighton & Hove Albion", id: 21 },
  //     attendance: 0,
  //     status: { short: "4.30pm", full: "Kick off 4.30pm" },
  //   },
  //   {
  //     date: "2023-05-20",
  //     venue: "The City Ground",
  //     competition: { name: "Premier League", id: 1 },
  //     id: 408210,
  //     time: "17:30",
  //     "home-team": { score: 0, name: "Nottingham Forest", id: 32 },
  //     "away-team": { score: 0, name: "Arsenal", id: 1 },
  //     attendance: 0,
  //     status: { short: "5.30pm", full: "Kick off 5.30pm" },
  //   },
  //   {
  //     date: "2023-05-28",
  //     venue: "Emirates Stadium",
  //     competition: { name: "Premier League", id: 1 },
  //     id: 408234,
  //     time: "16:30",
  //     "home-team": { score: 0, name: "Arsenal", id: 1 },
  //     "away-team": { score: 0, name: "Wolverhampton Wanderers", id: 44 },
  //     attendance: 0,
  //     status: { short: "4.30pm", full: "Kick off 4.30pm" },
  //   },
  // ];
  const [allPremierLeagueFixtures, setPremierLeagueFixtures] = useState([]);
  const [fixturesToShow, setFixturesToShow] = useState([]);

  const [team, setTeam] = useState(0);

  const homeFixtures = allPremierLeagueFixtures.filter((fixture) => {
    return fixture["home-team"].name === "Arsenal";
  });

  const awayFixtures = allPremierLeagueFixtures.filter((fixture) => {
    return fixture["away-team"].name === "Arsenal";
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
      "https://football-web-pages1.p.rapidapi.com/fixtures-results.json?comp=1&round=1&team=1";

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
        <h1>Arsenal</h1>
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

export default ArsenalFixtures;
