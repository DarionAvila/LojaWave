import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css'; // Importando o arquivo CSS
import App from './App'; // Importando o App como default
import { Carrossel } from './App'; // Importando o Carrossel como exportação nomeada

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> {/* Usando o App */}
    {/* Você pode usar o Carrossel aqui também, se necessário */}
    {/* <Carrossel /> */}
  </React.StrictMode>
);
