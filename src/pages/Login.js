import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Main from '../components/shared/Main';
import Navbar from '../components/shared/Navbar';

import { IsLoggedInContext } from '../App';

export default function Login() {
  const context = useContext(IsLoggedInContext);

  return (
    <div>
      <Navbar />
      <Main>
        <Link to="/participate">
          <button
            onClick={() => {
              context.setIsLoggedIn(true);
            }}
          >
            Sign in
          </button>
        </Link>
      </Main>
    </div>
  );
}
