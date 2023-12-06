import React from 'react';
import logo from './logo.svg';
import './App.css';

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, resetCounter } from './actions/counterActions';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AuthPage from "./pages/AuthPage";
import NotFoundPage from "./pages/NotFoundPage";


const Navigation = ({ links }) => {
  return (
    <nav className="App-nav">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="App-link"
        >
          {link.title}
        </a>
      ))}
    </nav>
  );
};



function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const links = [
    { href: "/auth", title: "Auth" },
    { href: "https://link2.com", title: "Link 2" },
    // Добавьте больше ссылок по необходимости
  ];

  // Пример запроса на получение пользователей
  fetch('/api/users')
    .then(response => response.json())
    .then(data => console.log('mock:', data))
    .catch(error => console.error('Ошибка:', error));


  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

// function App() {
//   return (
//   
//   );
// }

export default App;
