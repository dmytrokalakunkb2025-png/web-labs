import React, { useState, useEffect } from 'react';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Запит для 12-го варіанта
    fetch('https://jsonplaceholder.typicode.com/posts/12/comments')
      .then(response => response.json())
      .then(data => setReviews(data))
      .catch(error => console.error('Помилка завантаження:', error));
  }, []); // Порожній масив — запит виконається 1 раз при монтуванні

  return (
    <div>
      <h2>Відгуки</h2>
      {reviews.map(review => (
        <div key={review.id} style={{ border: '1px solid gray', margin: '10px 0', padding: '10px' }}>
          <h3>{review.name}</h3>
          <p><strong>Email:</strong> {review.email}</p>
          <p>{review.body}</p>
        </div>
      ))}
    </div>
  );
}