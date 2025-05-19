import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css'; // Importando o arquivo CSS
import App from './App'; // Importando o App como default
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> {/* Usando o App */}
  </React.StrictMode>
);
