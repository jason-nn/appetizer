import React, { useState, createContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Participate from './pages/Participate';
import Host from './pages/Host';

import Toast from './components/shared/Toast';

export const IsLoggedInContext = createContext(null);

export default function App() {
  const [message, setMessage] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.isLoggedIn ? localStorage.isLoggedIn !== 'false' : false
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

  return (
    <IsLoggedInContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {message ? <Toast message={message} /> : null}

      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              !isLoggedIn ? (
                <Login setMessage={setAndClearMessage} />
              ) : (
                <Participate setMessage={setAndClearMessage} />
              )
            }
          />
          <Route
            path="/participate"
            element={<Participate setMessage={setAndClearMessage} />}
          />
          <Route
            path="/host"
            element={<Host setMessage={setAndClearMessage} />}
          />
        </Routes>
      </BrowserRouter>
    </IsLoggedInContext.Provider>
  );
}
