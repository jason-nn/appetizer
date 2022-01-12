import React, { useContext } from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

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
  }

  a:hover {
    color: #a83232;
  }

  button:hover {
    color: white;
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
          <Link to="/participate">Participate</Link>
          <Link to="/host">Host</Link>

          <Link to="/">
            <button
              onClick={() => {
                context.setIsLoggedIn(false);
              }}
            >
              Sign out
            </button>
          </Link>
        </Right>
      ) : null}
    </Container>
  );
}
