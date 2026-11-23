import React, { useEffect, useState } from 'react';

export default function Footer() {
  const [sysInfo, setSysInfo] = useState({ os: '', browser: '' });

  useEffect(() => {
    // Читаємо інформацію під час монтування
    const osInfo = navigator.platform;
    const browserInfo = navigator.userAgent;
    
    // Зберігаємо у localStorage
    localStorage.setItem('react_osInfo', osInfo);
    localStorage.setItem('react_browserInfo', browserInfo);

    // Оновлюємо стан для рендеру
    setSysInfo({
      os: localStorage.getItem('react_osInfo'),
      browser: localStorage.getItem('react_browserInfo')
    });
  }, []);

  return (
    <footer style={{ marginTop: '40px', borderTop: '1px solid #ccc', paddingTop: '10px' }}>
      <p>ОС: {sysInfo.os}</p>
      <p>Браузер: {sysInfo.browser}</p>
    </footer>
  );
}