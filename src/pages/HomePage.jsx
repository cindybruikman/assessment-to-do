import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Welkom bij de TODO App</h1>
      <p>Navigeer naar de <Link to="/todo">Todo-pagina</Link> om te beginnen.</p>
    </div>
  );
}
