// Function to get the number of points scored by a player
function numPointsScored(playerName) {
    for (const team in game) {
      if (game.hasOwnProperty(team)) {
        const players = game[team].players;
        if (players.hasOwnProperty(playerName)) {
          return players[playerName].points;
        }
      }
    }
    return 0; // Player not found, return 0 points
  }
  
  // Function to get the shoe size of a player
  function shoeSize(playerName) {
    for (const team in game) {
      if (game.hasOwnProperty(team)) {
        const players = game[team].players;
        if (players.hasOwnProperty(playerName)) {
          return players[playerName].shoeSize;
        }
      }
    }
    return 0; // Player not found, return 0 shoe size
  }
  
  // Function to get the colors of a team
  function teamColors(teamName) {
    for (const team in game) {
      if (game.hasOwnProperty(team)) {
        if (game[team].teamName === teamName) {
          return game[team].colors;
        }
      }
    }
    return []; // Team not found, return an empty array
  }
  
  // Function to get an array of team names
  function teamNames() {
    const teamNamesArray = [];
    for (const team in game) {
      if (game.hasOwnProperty(team)) {
        teamNamesArray.push(game[team].teamName);
      }
    }
    return teamNamesArray;
  }
  
  // Function to get an array of player numbers for a team
  function playerNumbers(teamName) {
    for (const team in game) {
      if (game.hasOwnProperty(team)) {
        if (game[team].teamName === teamName) {
          const players = game[team].players;
          return Object.values(players).map(player => player.number);
        }
      }
    }
    return []; // Team not found or players don't have jersey numbers, return an empty array
  }
  
  // Function to get the player's stats
  function playerStats(playerName) {
    for (const team in game) {
      if (game.hasOwnProperty(team)) {
        const players = game[team].players;
        if (players.hasOwnProperty(playerName)) {
          return players[playerName].stats;
        }
      }
    }
    return {}; // Player not found, return an empty object
  }

  
  // Function to find the player with the largest shoe size and return their number of rebounds
function bigShoeRebounds() {
    let largestShoeSize = 0;
    let playerWithLargestShoe = '';
  
    for (const team in game) {
      if (game.hasOwnProperty(team)) {
        const players = game[team].players;
        for (const player in players) {
          if (players.hasOwnProperty(player)) {
            const shoeSize = players[player].shoeSize;
            if (shoeSize > largestShoeSize) {
              largestShoeSize = shoeSize;
              playerWithLargestShoe = player;
            }
          }
        }
      }
    }
  
    if (playerWithLargestShoe !== '') {
      return game.home.players[playerWithLargestShoe].rebounds;
    }
  
    return 0; // No player found with shoe size
  }
  
  // Function to find the player with the most points
  function mostPointsScored() {
    let mostPoints = 0;
    let playerWithMostPoints = '';
  
    for (const team in game) {
      if (game.hasOwnProperty(team)) {
        const players = game[team].players;
        for (const player in players) {
          if (players.hasOwnProperty(player)) {
            const points = players[player].points;
            if (points > mostPoints) {
              mostPoints = points;
              playerWithMostPoints = player;
            }
          }
        }
      }
    }
  
    return playerWithMostPoints;
  }
  
  // Function to find the team with the most points
  function winningTeam() {
    let highestScore = 0;
    let teamWithHighestScore = '';
  
    for (const team in game) {
      if (game.hasOwnProperty(team)) {
        const players = game[team].players;
        let teamScore = 0;
        for (const player in players) {
          if (players.hasOwnProperty(player)) {
            teamScore += players[player].points;
          }
        }
        if (teamScore > highestScore) {
          highestScore = teamScore;
          teamWithHighestScore = game[team].teamName;
        }
      }
    }
  
    return teamWithHighestScore;
  }
  
  // Function to find the player with the longest name
  function playerWithLongestName() {
    let longestName = '';
    for (const team in game) {
      if (game.hasOwnProperty(team)) {
        const players = game[team].players;
        for (const player in players) {
          if (players.hasOwnProperty(player)) {
            if (player.length > longestName.length) {
              longestName = player;
            }
          }
        }
      }
    }
    return longestName;
  }
  
  // Function to check if the player with the longest name had the most steals
  function doesLongNameStealATon() {
    let playerWithLongestName = '';
    let mostSteals = 0;
    for (const team in game) {
      if (game.hasOwnProperty(team)) {
        const players = game[team].players;
        for (const player in players) {
          if (players.hasOwnProperty(player)) {
            const steals = players[player].stats.steals;
            if (steals > mostSteals) {
              mostSteals = steals;
              playerWithLongestName = player;
            }
          }
        }
      }
    }
    return playerWithLongestName === playerWithLongestName();
  }
  