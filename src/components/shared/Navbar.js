import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 60px;
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
  gap: 15px;

  font-family: 'SF-Pro-Display-Semibold', Helvetica, sans-serif;
  font-size: 25px;
  color: #4f42ec;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  font-family: 'SF-Pro-Display-Regular', Helvetica, sans-serif;
  font-size: 15px;
  color: #4f42ec;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default function Navbar() {
  return (
    <Container>
      <Left>
        <p>App Name</p>
      </Left>
      <Right>
        <a href="">Link</a>
        <a href="">Link</a>
        <a href="">Link</a>
      </Right>
    </Container>
  );
}
