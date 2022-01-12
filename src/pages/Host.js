import React, { useContext } from 'react';

import Main from '../components/shared/Main';
import Navbar from '../components/shared/Navbar';

import { IsLoggedInContext } from '../App';

export default function Host({ setMessage }) {
  const context = useContext(IsLoggedInContext);

  return (
    <div>
      <Navbar />
      <Main>
        {context.isLoggedIn ? (
          <div>
            <h1>Host</h1>
            {/* remove filler h1 and add your content here */}
          </div>
        ) : null}
      </Main>
    </div>
  );
}
