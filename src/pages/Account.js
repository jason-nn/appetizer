import React, { useContext } from 'react';
import styled from 'styled-components';

import Main from '../components/shared/Main';
import Navbar from '../components/shared/Navbar';

import { Context } from '../App';

const Box = styled.div`
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;

  background-color: white;
  padding: 30px;
  margin-bottom: 30px;

  width: 50%;
  margin: 0 auto;
`;

const Header = styled.p`
  background-image: linear-gradient(35deg, #a83232, #ff5b5b);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  font-family: 'CircularStd-Black', Helvetica, sans-serif;
  font-size: 25px;
`;

const Balance = styled.p`
  font-family: 'CircularStd-Black', Helvetica, sans-serif;
  font-size: 40px;
`;

export default function Account() {
  const context = useContext(Context);

  console.log(context.currentUser);
  return (
    <div>
      <Navbar />
      <Main>
        {context.isLoggedIn ? (
          <div>
            <Box>
              <Header>Balance</Header>
              <br />
              <Balance>{context.numToUSD(context.currentUser.balance)}</Balance>
              <br />
              <button>Add Funds</button>
            </Box>
          </div>
        ) : null}
      </Main>
    </div>
  );
}
