import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  z-index: 1;

  bottom: 30px;
  right: 30px;

  background-image: linear-gradient(35deg, #a83232, #ff5b5b);
  color: white;

  font-family: 'CircularStd-Medium', Helvetica, sans-serif;
  padding: 1em 1.5em;
  border-radius: 8px;

  -webkit-animation: slide-in-bottom 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: slide-in-bottom 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

export default function Toast({ message }) {
  return <Container>{message}</Container>;
}
