import React, { useContext, useRef } from 'react';
import styled from 'styled-components';

import Main from '../components/shared/Main';
import Navbar from '../components/shared/Navbar';

import { Context } from '../App';

const Container = styled.div`
  background-color: white;
  padding: 30px;
  padding-bottom: 90px;
  width: 350px;
  margin: 0 auto;

  border-radius: 8px;
  margin-top: 50px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;

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
  const context = useContext(Context);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const validate = (email, password) => {
    for (const account of context.accountsArray) {
      if (account.email === email && account.password === password) {
        context.setCurrentUser(account);
        return true;
      }
    }
    return false;
  };

  return (
    <div>
      <Navbar />
      <Main>
        <Container>
          <form
            onSubmit={(e) => {
              e.preventDefault();

              if (validate(emailRef.current.value, passwordRef.current.value)) {
                context.setIsLoggedIn(true);
                context.setMessage('Successful sign in');
              } else {
                context.setMessage('Invalid credentials');
              }
            }}
          >
            <h1>Sign in to Parapol</h1>

            <br />
            <br />
            <br />

            <div>
              <p>Email</p>
              <input type="email" ref={emailRef} />
            </div>

            <br />
            <br />

            <div>
              <p>Password</p>
              <input type="password" ref={passwordRef} />
            </div>

            <br />
            <br />
            <br />

            <button>Sign in</button>
          </form>
        </Container>
      </Main>
    </div>
  );
}
