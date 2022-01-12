import React, { useState, createContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Participate from './pages/Participate';
import Host from './pages/Host';

import Toast from './components/shared/Toast';

import { raffles } from './data/raffles';

export const Context = createContext(null);

export default function App() {
  const [message, setMessage] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.isLoggedIn ? localStorage.isLoggedIn !== 'false' : false
  );
  const [rafflesArray, setRafflesArray] = useState(
    localStorage.rafflesArray ? JSON.parse(localStorage.rafflesArray) : raffles
  );

  const setAndClearMessage = (message) => {
    setMessage(null);
    setMessage(message);
    setTimeout(() => {
      setMessage(null);
    }, 2000);
  };

  useEffect(() => {
    localStorage.isLoggedIn = isLoggedIn;
  }, [isLoggedIn]);

  useEffect(() => {
    localStorage.rafflesArray = JSON.stringify(rafflesArray);
  }, [rafflesArray]);

  console.log(raffles);

  return (
    <Context.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        setMessage: setAndClearMessage,
        rafflesArray,
        setRafflesArray,
      }}
    >
      {message ? <Toast message={message} /> : null}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={!isLoggedIn ? <Login /> : <Participate />} />
          <Route path="/participate" element={<Participate />} />
          <Route path="/host" element={<Host />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}
