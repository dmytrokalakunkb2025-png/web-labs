import React, { useState, useEffect } from 'react';

export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasBeenClosed, setHasBeenClosed] = useState(false);

  useEffect(() => {
    // Показуємо форму через 1 хвилину (60000 мс)
    const timer = setTimeout(() => {
      if (!hasBeenClosed) {
        setIsOpen(true);
      }
    }, 60000);

    return () => clearTimeout(timer); // Очищення таймера
  }, [hasBeenClosed]);

  if (!isOpen) return null; // Умовний рендеринг

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.6)' }}>
      <div style={{ background: 'white', color: 'black', margin: '15% auto', padding: '20px', width: '300px' }}>
        <h2>Зворотний зв'язок</h2>
        <form action="https://formspree.io/f/ВАШ_ЕНДПОЙНТ" method="POST">
          <input type="text" name="name" placeholder="Ім'я" required style={{ width: '100%', marginBottom: '10px' }}/>
          <input type="email" name="email" placeholder="Email" required style={{ width: '100%', marginBottom: '10px' }}/>
          <input type="tel" name="phone" placeholder="Номер телефону" required style={{ width: '100%', marginBottom: '10px' }}/>
          <textarea name="message" placeholder="Ваше повідомлення" required style={{ width: '100%', marginBottom: '10px' }}></textarea>
          <button type="submit">Надіслати</button>
          <button type="button" onClick={() => { setIsOpen(false); setHasBeenClosed(true); }} style={{ marginLeft: '10px' }}>Закрити</button>
        </form>
      </div>
    </div>
  );
}