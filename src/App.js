import React, { useState, createContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Participate from './pages/Participate';
import Host from './pages/Host';

export const IsLoggedInContext = createContext(null);

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log(isLoggedIn);

  return (
    <IsLoggedInContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/participate" element={<Participate />} />
          <Route path="/host" element={<Host />} />
        </Routes>
      </BrowserRouter>
    </IsLoggedInContext.Provider>
  );
}
