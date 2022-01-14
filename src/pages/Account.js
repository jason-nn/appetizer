import React, { useContext, useState, useRef } from 'react';
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

  -webkit-animation: swing-in-right-fwd 0.5s
    cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
  animation: swing-in-right-fwd 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    both;
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

const Centered = styled.div`
  display: flex;
  justify-content: center;
`;

export default function Account() {
  const context = useContext(Context);

  const [isOpen, setIsOpen] = useState(false);

  const amountRef = useRef(null);

  const findUserIndex = () => {
    for (let i = 0; i < context.accountsArray.length; i++) {
      if (context.currentUser.email === context.accountsArray[i].email) {
        return i;
      }
    }
  };

  const addFunds = (amount) => {
    const index = findUserIndex();

    const accountsArrayCopy = [...context.accountsArray];
    accountsArrayCopy[index].balance += amount;

    context.setAccountsArray(accountsArrayCopy);
    context.setCurrentUser(accountsArrayCopy[index]);
  };

  return (
    <div>
      <Navbar />
      <Main>
        {context.isLoggedIn ? (
          <div>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
              <label>Amount</label>
              <form
                onSubmit={(e) => {
                  e.preventDefault();

                  const amount = amountRef.current.value;

                  addFunds(parseFloat(amount));
                  setIsOpen(false);
                  amountRef.current.value = null;
                  context.setMessage(
                    `Successfully added ${context.toCurrency(amount)}`
                  );
                }}
              >
                <input type="number" step={0.01} min={0} ref={amountRef} />

                <br />
                <br />

                <Centered>
                  <button>Add funds</button>
                </Centered>
              </form>
            </Modal>
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
