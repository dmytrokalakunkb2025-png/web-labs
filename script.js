// Виконав: Дмитро Калакун, Національний університет «Львівська політехніка»

// 1. Дані про ОС і браузер у localStorage та вивід у футері
function handleSystemInfo() {
  const info = {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    language: navigator.language,
    cookieEnabled: navigator.cookieEnabled,
  };
  localStorage.setItem('os_browser_info', JSON.stringify(info));

  const box = document.getElementById('storage-info');
  box.innerHTML = '<strong>Дані з localStorage:</strong>';
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const p = document.createElement('p');
    p.textContent = `${key}: ${localStorage.getItem(key)}`;
    box.appendChild(p);
  }
}

// 2. Коментарі з сервера (Варіант 12 — запис 19)
async function fetchComments() {
  const container = document.getElementById('comments-container');
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/19/comments');
    const comments = await response.json();
    container.innerHTML = '';
    comments.forEach((comment) => {
      const card = document.createElement('div');
      card.className = 'comment-card';

      const title = document.createElement('h3');
      title.textContent = comment.name;

      const email = document.createElement('p');
      email.className = 'comment-email';
      email.textContent = comment.email;

      const body = document.createElement('p');
      body.textContent = comment.body;

      card.append(title, email, body);
      container.appendChild(card);
    });
  } catch (error) {
    container.innerHTML = '<p>Не вдалося завантажити коментарі.</p>';
    console.error('Помилка:', error);
  }
}

// 3. Форма зворотного зв'язку через 1 хвилину
function initModal() {
  const modal = document.getElementById('feedback-modal');
  const closeBtn = document.getElementById('close-modal');

  setTimeout(() => {
    modal.classList.remove('hidden');
  }, 60000); // 60000 мс = 1 хвилина

  closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
  });
}

// 4. Нічний/денний режим (автоматично за часом доби + кнопка)
function initTheme() {
  const btn = document.getElementById('theme-toggle');
  const hours = new Date().getHours();
  const isDay = hours >= 7 && hours < 21;

  const updateButton = () => {
    btn.textContent = document.body.classList.contains('dark-mode')
      ? '☀️ Денний режим'
      : '🌙 Нічний режим';
  };

  if (!isDay) {
    document.body.classList.add('dark-mode');
  }
  updateButton();

  btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    updateButton();
  });
}

handleSystemInfo();
fetchComments();
initModal();
initTheme();
