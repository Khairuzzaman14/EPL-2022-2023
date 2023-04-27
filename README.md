# EPL-2022-2023

## Description

This app shows each Premier League's teams' matches and their respective scores during half-time and full-time.

## Technology

This app is done via React and its styling via Bootstrap.

## User Stories

The user is able to choose to view the entire 38 matches for each team or for only home or away matches.

## Problems faced

1. My API was showing data for every matches for each team, including other competitions such as the FA Cup and continental competitions.

I had to filter out the data to contain only "Premier League".

2. The ID for each team in the API was not 1-20 but instead it can be 40 for example.

I had to find the correct ID for each Premier League Team.
I had to create a component for each Premier League team to store the data for their respective fixtures.

3. I had to figure out how the user would select the data for each Premier League Team.

I created different routes to each Premier League Fixtures Data and different links to the different Premier League Team.

## API used

This is the url I used to obtain Arsenal's fixtures data, "https://football-web-pages1.p.rapidapi.com/fixtures-results.json?comp=1&round=1&team=1".

The other 19 teams data had different endpoints in the url, where team=ID.

## Live URL

https://epl-2022-2023.netlify.app
