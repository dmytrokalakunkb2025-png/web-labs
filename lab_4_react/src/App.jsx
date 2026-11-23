import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import Reviews from './Reviews';
import ContactForm from './ContactForm';

export default function App() {
  const [theme, setTheme] = useState('light');

  // Розумний перемикач теми при завантаженні
  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour >= 7 && currentHour < 21) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, []);

  // Застосування класів до body
  useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark-mode' : '';
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <div style={{ padding: '20px' }}>
      <header>
        <button onClick={toggleTheme}>
          Перемкнути на {theme === 'light' ? 'нічну' : 'денну'} тему
        </button>
      </header>
      <main>
        <h1>Лабораторна робота №4 (React)</h1>
        <Reviews />
      </main>
      <Footer />
      <ContactForm />
    </div>
  );
}