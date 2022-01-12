import React, { useContext } from 'react';

import Main from '../components/shared/Main';
import Navbar from '../components/shared/Navbar';

import { Context } from '../App';

export default function Participate() {
  const context = useContext(Context);

  return (
    <div>
      <Navbar />
      <Main>
        {context.isLoggedIn ? (
          <div>
            <h1>Participate</h1>
            <h1>{context.isLoggedIn}</h1>
            {/* remove filler h1 and add your content here */}
          </div>
        ) : null}
      </Main>
    </div>
  );
}
