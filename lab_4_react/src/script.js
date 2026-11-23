// Виконав: Дмитро Калакун, Національний університет «Львівська політехніка»

// 1. Зберігання даних у браузері
const osInfo = navigator.platform;
const browserInfo = navigator.userAgent;
localStorage.setItem('osInfo', osInfo);
localStorage.setItem('browserInfo', browserInfo);

document.getElementById('footer-info').innerText = 
    `ОС: ${localStorage.getItem('osInfo')} | Браузер: ${localStorage.getItem('browserInfo')}`;

// 2. Відображення динамічного вмісту (Варіант 12)
fetch('https://jsonplaceholder.typicode.com/posts/12/comments')
    .then(response => response.json())
    .then(data => {
        const commentsContainer = document.getElementById('comments');
        commentsContainer.innerHTML = ''; // Очищуємо текст завантаження
        data.forEach(comment => {
            const div = document.createElement('div');
            div.style.border = '1px solid gray';
            div.style.margin = '10px 0';
            div.style.padding = '10px';
            div.innerHTML = `<strong>${comment.name}</strong> (${comment.email})<p>${comment.body}</p>`;
            commentsContainer.appendChild(div);
        });
    })
    .catch(error => console.error('Помилка:', error));

// 3. Надсилання форми зворотного зв'язку (через 1 хвилину)
setTimeout(() => {
    document.getElementById('modal').style.display = 'block';
}, 60000); // 60000 мс = 1 хвилина

document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});

// 4. Перехід на нічний/денний режим
const themeSwitch = document.getElementById('theme-switch');
const currentHour = new Date().getHours();
const isDayTime = currentHour >= 7 && currentHour < 21;

if (!isDayTime) {
    document.body.classList.add('dark-theme');
    themeSwitch.checked = true;
}

themeSwitch.addEventListener('change', (e) => {
    if (e.target.checked) {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }
});