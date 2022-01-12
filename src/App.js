import React, { useState, createContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Participate from './pages/Participate';
import Host from './pages/Host';

export const IsLoggedInContext = createContext(null);

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.isLoggedIn ? localStorage.isLoggedIn : false
  );

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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={!isLoggedIn ? <Login /> : <Participate />} />
          <Route path="/participate" element={<Participate />} />
          <Route path="/host" element={<Host />} />
        </Routes>
      </BrowserRouter>
    </IsLoggedInContext.Provider>
  );
}
