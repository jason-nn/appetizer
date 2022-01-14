import React, { useContext } from 'react';
import styled from 'styled-components';

import Raffle from '../shared/Raffle';
import { Context } from '../../App';

const Container = styled.div`
  padding: 30px 60px;
`;

export default function Raffles() {
  const context = useContext(Context);

  return (
    <Container>
      {context.rafflesArray
        .filter((raffle) => {
          return raffle.hostedBy === context.currentUser.email;
        })
        .map((raffle) => {
          return (
            <Raffle
              key={raffle.id}
              title={raffle.title}
              type={raffle.type}
              prize={raffle.prize}
              ticketPrice={raffle.ticketPrice}
              ticketsAllocated={raffle.ticketsAllocated}
              ticketsSold={raffle.ticketsSold}
              hostedBy={raffle.hostedBy}
            />
          );
        })}
    </Container>
  );
}
