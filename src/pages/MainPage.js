import React from 'react';
import logo from '../logo.svg';
import '../App.css';

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, resetCounter } from '../actions/counterActions';
import { Link } from "react-router-dom";

const Navigation = ({ links }) => {
  return (
    <nav className="App-nav">
      {links.map((link, index) => (
        <Link
          key={index}
          to={link.href}
          className="App-link"
        >
          {link.title}
        </Link>
      ))}
    </nav>
  );
};



function MainPage() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const links = [
    { href: "/auth", title: "Auth" },
    { href: "https://link2.com", title: "Link 2" },
    // Добавьте больше ссылок по необходимости
  ];


  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Navigation links={links} />

        <h1>Count: {count}</h1>
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
        <hr />
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(resetCounter())}>resetCounter</button>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </header>
    </div>


  );
}


export default MainPage;
