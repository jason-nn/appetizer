import React, { useContext } from 'react';
import styled from 'styled-components';

import { Context } from '../../App';

const Container = styled.div`
  padding: 30px 60px;
`;

export default function HostRaffle() {
  const context = useContext(Context);

  return <Container></Container>;
}
