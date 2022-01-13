import React, { useState, createContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Participate from './pages/Participate';
import Host from './pages/Host';
import Account from './pages/Account';

import Toast from './components/shared/Toast';

import { raffles } from './data/raffles';
import { accounts } from './data/accounts';

export const Context = createContext(null);

export default function App() {
  const [message, setMessage] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.isLoggedIn ? localStorage.isLoggedIn !== 'false' : false
  );
  const [rafflesArray, setRafflesArray] = useState(
    localStorage.rafflesArray ? JSON.parse(localStorage.rafflesArray) : raffles
  );
  const [currentUser, setCurrentUser] = useState(null);
  console.log(currentUser);

  const [accountsArray, setAccountsArray] = useState(
    localStorage.accountsArray
      ? JSON.parse(localStorage.accountsArray)
      : accounts
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

  useEffect(() => {
    localStorage.accountsArray = JSON.stringify(accountsArray);
  }, [accountsArray]);

  return (
    <Context.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        setMessage: setAndClearMessage,
        rafflesArray,
        setRafflesArray,
        accountsArray,
        setAccountsArray,
        currentUser,
        setCurrentUser,
      }}
    >
      {message ? <Toast message={message} /> : null}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={!isLoggedIn ? <Login /> : <Participate />} />
          <Route path="/participate" element={<Participate />} />
          <Route path="/host" element={<Host />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}
