// Обработчики событий
function setupEventListeners() {
  // Кнопка создания студии
  document.querySelector('.create-studio-btn').addEventListener('click', () => {
    window.location.href = 'studio.html';
  });

  document.querySelector('.btn-create-studio').addEventListener('click', () => {
    window.location.href = 'studio.html';
  });
}

// Загрузка игр с Next.js API
async function loadGames() {
  try {
    const response = await fetch('/api/games');
    if (!response.ok) throw new Error('Ошибка загрузки игр');

    const games = await response.json();
    renderGames(games);
  } catch (error) {
    console.error('Ошибка:', error);
    document.getElementById('gamesContainer').innerHTML = '<p>Ошибка загрузки игр</p>';
  }
}

// Отрисовка игр
function renderGames(games) {
  const container = document.getElementById('gamesContainer');
  container.innerHTML = '';

  games.forEach(game => {
    const gameCard = document.createElement('div');
    gameCard.className = 'game-card';
    gameCard.innerHTML = `
      <img src="${game.cover || 'assets/img/game-cover-default.jpg'}" alt="${game.name}" class="game-cover">
      <div class="game-info">
        <h4 class="game-title">${game.name}</h4>
        <p class="game-studio">от ${game.studio.name}</p>
        <div class="game-stats">
          <span>⭐ ${game.rating || 'Нет'}</span>
          <span>📥 ${game.downloads}</span>
        </div>
      </div>
    `;
    gameCard.addEventListener('click', () => {
      window.location.href = `game.html?id=${game._id}`;
    });
    container.appendChild(gameCard);
  });
}
