import React, { useContext } from 'react';
import styled from 'styled-components';

import { Context } from '../../App';

const Container = styled.div`
  background-color: white;
  width: 100%;
  padding: 30px;

  box-shadow: rgba(0 0, 0, 0.08) 0px 4px 12px;
  border-radius: 8px;
  margin-bottom: 30px;

  position: relative;

  -webkit-animation: swing-in-right-fwd 0.5s
    cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
  animation: swing-in-right-fwd 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    both;

  position: relative;
`;

const Title = styled.div`
  font-family: 'CircularStd-Black', Helvetica, sans-serif;
  font-size: 25px;

  margin-bottom: 30px;
`;

const TicketsBought = styled.div`
  background-image: linear-gradient(35deg, #a83232, #ff5b5b);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-family: 'CircularStd-Black', Helvetica, sans-serif;
  font-size: 30px;
`;

const TicketPrice = styled.div`
  font-family: 'CircularStd-Medium', Helvetica, sans-serif;
  font-size: 15px;

  display: flex;
  justify-content: space-between;

  color: gray;

  margin-top: 30px;
`;

export default function Purchase({ title, price, quantity, purchasedOn }) {
  const context = useContext(Context);

  const formatted = new Date(purchasedOn).toString().split('GMT')[0];

  return (
    <Container>
      <Title>{title}</Title>
      <TicketsBought>
        {quantity} {quantity > 1 ? 'tickets' : 'ticket'}
      </TicketsBought>
      <TicketPrice>
        <span>{context.toCurrency(price)} each</span>
        <span>{formatted}</span>
      </TicketPrice>
    </Container>
  );
}
