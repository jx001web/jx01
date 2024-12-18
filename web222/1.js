// Function to simulate fetch API response
function simulateFetch(url) {
  return new Promise(resolve => {
    setTimeout(() => {
      const responses = {
        '/api/get-initial-clue': { clue: "在古老的图书馆里找到了第一个线索..." },
        '/api/decode-ancient-script': { decoded: "解码成功!宝藏在一座古老的神庙中..." },
        '/api/search-temple': { result: "找到了一个神秘的箱子..." },
        '/api/open-treasure-box': { contents: "恭喜!你找到了传说中的宝藏!" }
      };
      resolve({ status: 200, json: () => Promise.resolve(responses[url]) });
    }, 1000);
  });
}

// Function to save player info to localStorage
function savePlayerInfo(playerId, nickname, history) {
  const playerInfo = { playerId, nickname, history };
  localStorage.setItem('playerInfo', JSON.stringify(playerInfo));
}

// Function to load player info from localStorage
function loadPlayerInfo() {
  const playerInfo = localStorage.getItem('playerInfo');
  return playerInfo ? JSON.parse(playerInfo) : null;
}

// Function to update game history
function updateGameHistory(newHistory) {
  const playerInfo = loadPlayerInfo();
  if (playerInfo) {
    playerInfo.history.push(newHistory);
    savePlayerInfo(playerInfo.playerId, playerInfo.nickname, playerInfo.history);
  }
}

// Function to display player info and game history on the page
function displayPlayerInfo() {
  const playerInfo = loadPlayerInfo();
  if (playerInfo) {
    const infoDiv = document.getElementById('player-info');
    infoDiv.innerHTML = `<h2>${playerInfo.nickname}</h2><p>Player ID:${playerInfo.playerId}</p>`;
    
    const historyDiv = document.getElementById('game-history');
    historyDiv.innerHTML = '<h2>Game History</h2>';
    playerInfo.history.forEach((entry, index) => {
      historyDiv.innerHTML += `<p>${index + 1}.${entry}</p>`;
    });
  }
}

// Example usage
document.addEventListener('DOMContentLoaded', async () => {
  try {
    // Load player info from localStorage or create new player
    let playerInfo = loadPlayerInfo();
    if (!playerInfo) {
      // Prompt user for their info and save it
      const playerId = 'player_' + Date.now(); // Generate a unique player ID based on current timestamp
      const nickname = prompt('Enter your nickname:');
      playerInfo = { playerId, nickname, history: [] };
      savePlayerInfo(playerId, nickname, []);
    }

    // Display player info and game history
    displayPlayerInfo();

    // Simulate fetching initial clue and update game history
    const response = await simulateFetch('/api/get-initial-clue');
    const initialClue = await response.json();
    console.log(initialClue.clue);
    updateGameHistory(initialClue.clue);
    displayPlayerInfo(); // Update displayed history
  } catch (error) {
    console.error(error);
  }
});