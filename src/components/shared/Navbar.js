import React, { useContext } from 'react';
import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

import { Context } from '../../App';

const Container = styled.div`
  width: 100vw;
  height: 70px;
  background-color: white;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0px 60px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  font-family: 'CircularStd-Black', Helvetica, sans-serif;
  font-size: 35px;

  p {
    background-image: linear-gradient(35deg, #a83232, #ff5b5b);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  img {
    width: 50px;
    height: auto;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  font-family: 'CircularStd-Book', Helvetica, sans-serif;
  font-size: 15px;

  a {
    text-decoration: none;
    color: inherit;
    border-bottom: 1px solid white;
  }

  a:hover {
    color: #a83232;
  }

  button:hover {
    color: white;
  }

  .active {
    border-bottom: 1px solid black;
  }
`;

export default function Navbar() {
  const context = useContext(Context);

  return (
    <Container>
      <Left>
        <img src="logo.png" alt="" />
        <p>parapol</p>
      </Left>

      {context.isLoggedIn ? (
        <Right>
          <NavLink to="/participate">Participate</NavLink>
          <NavLink to="/host">Host</NavLink>
          <NavLink to="/account">Account</NavLink>

          <NavLink to="/" className={(isActive) => (isActive ? '' : '')}>
            <button
              onClick={() => {
                context.setCurrentUser(null);
                context.setIsLoggedIn(false);
                context.setMessage('Successful sign out');
              }}
            >
              Sign out
            </button>
          </NavLink>
        </Right>
      ) : null}
    </Container>
  );
}
