import React, { useContext, useState } from 'react';
import styled from 'styled-components';

import Main from '../components/shared/Main';
import Navbar from '../components/shared/Navbar';
import Modal from '../components/shared/Modal';

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

  const [isOpen, setIsOpen] = useState(false);

  console.log(context.currentUser);
  return (
    <div>
      <Navbar />
      <Main>
        {context.isLoggedIn ? (
          <div>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen}></Modal>
            <Box>
              <Header>Balance</Header>
              <br />
              <Balance>
                {context.toCurrency(context.currentUser.balance)}
              </Balance>
              <br />
              <button onClick={() => setIsOpen(true)}>Add funds</button>
            </Box>
          </div>
        ) : null}
      </Main>
    </div>
  );
}
