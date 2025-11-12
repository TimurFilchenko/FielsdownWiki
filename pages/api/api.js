// Базовый URL для Next.js API
const API_BASE = '/api';

// Получить игры
export async function getGames() {
  const response = await fetch(`${API_BASE}/games`);
  return response.json();
}

// Получить игру по ID
export async function getGameById(id) {
  const response = await fetch(`${API_BASE}/games/${id}`);
  return response.json();
}

// Получить комментарии к игре
export async function getComments(gameId) {
  const response = await fetch(`${API_BASE}/games/${gameId}/comments`);
  return response.json();
}

// Отправить комментарий
export async function postComment(gameId, text) {
  const response = await fetch(`${API_BASE}/games/${gameId}/comments`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text })
  });
  return response.json();
}

// Создать студию
export async function createStudio(name, description) {
  const response = await fetch(`${API_BASE}/studios`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, description })
  });
  return response.json();
}
