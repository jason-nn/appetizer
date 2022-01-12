import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Main from '../components/shared/Main';
import Navbar from '../components/shared/Navbar';

import { IsLoggedInContext } from '../App';

const Container = styled.div`
  background-color: white;
  padding: 30px;
  padding-bottom: 90px;
  width: 350px;
  margin: 0 auto;

  border-radius: 8px;
  margin-top: 50px;

  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;

  p {
    margin-bottom: 0.5em;

    font-family: 'CircularStd-Medium', Helvetica, sans-serif;
  }

  div {
    width: 100%;
  }

  input {
    width: 100%;
  }

  form {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    background-image: linear-gradient(35deg, #a83232, #ff5b5b);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;

    font-family: 'CircularStd-Black', Helvetica, sans-serif;
  }
`;

export default function Login() {
  const context = useContext(IsLoggedInContext);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  return (
    <div>
      <Navbar />
      <Main>
        <Container>
          <form
            onSubmit={(e) => {
              e.preventDefault();

              if (
                emailRef.current.value === 'jason@parapol.ph' &&
                passwordRef.current.value === 'password'
              ) {
                context.setIsLoggedIn(true);
              } else {
              }
            }}
          >
            <h1>Sign in to Parapol</h1>

            <br />
            <br />

            <div>
              <p>Email</p>
              <input type="email" ref={emailRef} />
            </div>

            <br />

            <div>
              <p>Password</p>
              <input type="password" ref={passwordRef} />
            </div>

            <br />
            <br />

            <button>Sign in</button>
          </form>
        </Container>
      </Main>
    </div>
  );
}
