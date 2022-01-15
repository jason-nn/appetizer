import React, { useState, createContext, useEffect, useMemo } from 'react';
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
  const [currentUser, setCurrentUser] = useState(
    localStorage.currentUser ? JSON.parse(localStorage.currentUser) : null
  );

  const [accountsArray, setAccountsArray] = useState(
    localStorage.accountsArray
      ? JSON.parse(localStorage.accountsArray)
      : accounts
  );

  // const [purchasesArray, setPurchasesArray] = useState(initialState);

  const setAndClearMessage = (message) => {
    setMessage(null);
    setMessage(message);
    setTimeout(() => {
      setMessage(null);
    }, 2000);
  };

  const toCurrency = (num) => {
    return Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'PHP',
      minimumFractionDigits: 2,
    }).format(num);
  };

  const findUserIndex = () => {
    for (let i = 0; i < accountsArray.length; i++) {
      if (currentUser.email === accountsArray[i].email) {
        return i;
      }
    }
  };

  const findRaffleIndex = (raffleId) => {
    for (let i = 0; i < rafflesArray.length; i++) {
      if (raffleId === rafflesArray[i].id) {
        return i;
      }
    }
  };

  console.log(rafflesArray);

  const addFunds = (amount) => {
    const index = findUserIndex();

    const accountsArrayCopy = [...accountsArray];
    accountsArrayCopy[index].balance += amount;

    setAccountsArray(accountsArrayCopy);
    setCurrentUser(accountsArrayCopy[index]);
  };

  const deductFunds = (amount) => {
    const index = findUserIndex();

    const accountsArrayCopy = [...accountsArray];
    accountsArrayCopy[index].balance -= amount;

    setAccountsArray(accountsArrayCopy);
    setCurrentUser(accountsArrayCopy[index]);
  };

  const getBalance = () => {
    const index = findUserIndex();

    return accountsArray[index].balance;
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

  const dependency = useMemo(() => {
    return currentUser?.balance ? currentUser.balance : null;
  }, [currentUser, currentUser.balance]);

  useEffect(() => {
    localStorage.currentUser = JSON.stringify(currentUser);
  }, [currentUser, dependency]);

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
        toCurrency,
        addFunds,
        deductFunds,
        getBalance,
        findRaffleIndex,
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
