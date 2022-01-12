import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../components/shared/Main';
import Navbar from '../components/shared/Navbar';

export default function Login() {
  return (
    <div>
      <Navbar />
      <Main>
        <Link to="/participate">
          <button>Sign in</button>
        </Link>
      </Main>
    </div>
  );
}
