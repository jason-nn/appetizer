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
`;

export default function Navbar() {
  return <Container></Container>;
}
