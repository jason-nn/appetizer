import React from 'react';
import styled from 'styled-components';

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
  gap: 5px;

  font-family: 'SF-Pro-Display-Semibold', Helvetica, sans-serif;
  font-size: 40px;
  color: #d85140;

  img {
    width: 40px;
    height: auto;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  font-family: 'SF-Pro-Display-Regular', Helvetica, sans-serif;
  font-size: 16px;

  a {
    text-decoration: none;
    color: inherit;
  }

  a:hover {
    color: #d85140;
  }
`;

export default function Navbar() {
  return (
    <Container>
      <Left>
        <img src="logo.svg" alt="" />
        <p>ding</p>
      </Left>
      <Right>
        <a href="">Link</a>
        <a href="">Link</a>
        <a href="">Link</a>
      </Right>
    </Container>
  );
}
