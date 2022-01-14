import React, { useContext } from 'react';
import styled from 'styled-components';

import { Context } from '../../App';

const Container = styled.div`
  background-color: white;
  width: 100%;
  padding: 30px;

  box-shadow: rgba(0+ 0, 0, 0.08) 0px 4px 12p;
  border-radius: 8px;
  margin-bottom: 30px;

  position: relative;

  -webkit-animation: swing-in-right-fwd 0.5s
    cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
  animation: swing-in-right-fwd 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    both;
`;

const Header = styled.div`
  font-family: 'CircularStd-Black', Helvetica, sans-serif;
  font-size: 25px;
`;

const TicketPrice = styled.div`
  background-image: linear-gradient(35deg, #a83232, #ff5b5b);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-family: 'CircularStd-Black', Helvetica, sans-serif;
  font-size: 30px;

  margin: 30px 0px;
`;

const Footer = styled.div`
  font-family: 'CircularStd-Medium', Helvetica, sans-serif;
  font-size: 15px;

  display: flex;
  justify-content: space-between;

  color: gray;
`;

export default function Raffle({
  title,
  type,
  prize,
  ticketPrice,
  ticketsAllocated,
  ticketsSold,
  hostedBy,
}) {
  const context = useContext(Context);

  return (
    <Container>
      <Header>
        {title}:&nbsp;
        <span>
          Get a chance to win&nbsp;
          {type === 'cash' ? context.toCurrency(prize) : prize}!
        </span>
      </Header>
      <TicketPrice>Ticket Price: {context.toCurrency(ticketPrice)}</TicketPrice>

      <Footer>
        <span>hosted by {hostedBy}</span>
        <span>
          {ticketsSold}/{ticketsAllocated} tickets sold
        </span>
      </Footer>
    </Container>
  );
}
