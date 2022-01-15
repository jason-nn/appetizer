import React, { useContext } from 'react';
import styled from 'styled-components';

import Purchase from './Purchase';

import { Context } from '../../App';

const Container = styled.div`
  padding: 30px 60px;
`;

export default function Purchases() {
  const context = useContext(Context);

  return (
    <Container>
      {context.purchasesArray
        .filter((purchase) => {
          return purchase.purchasedBy === context.currentUser.email;
        })
        .map((purchase, key) => {
          return (
            <Purchase
              key={key}
              title={purchase.raffle.title}
              price={purchase.raffle.ticketPrice}
              quantity={purchase.ticketsBought}
              purchasedOn={purchase.purchasedOn}
            />
          );
        })}
    </Container>
  );
}
