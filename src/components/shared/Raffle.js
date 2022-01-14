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

const Header = styled.div`
  font-family: 'CircularStd-Black', Helvetica, sans-serif;
  font-size: 25px;

  margin-bottom: 30px;
`;

const TicketPrice = styled.div`
  background-image: linear-gradient(35deg, #a83232, #ff5b5b);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-family: 'CircularStd-Black', Helvetica, sans-serif;
  font-size: 30px;
`;

const Footer = styled.div`
  font-family: 'CircularStd-Medium', Helvetica, sans-serif;
  font-size: 15px;

  display: flex;
  justify-content: space-between;

  color: gray;

  margin-top: 30px;
`;

const PurchaseButton = styled.button`
  font-size: 20px;
  margin-top: 20px;

  /* position: absolute;
  top: 30px;
  right: 30px; */
`;

export default function Raffle({
  id,
  title,
  type,
  prize,
  ticketPrice,
  ticketsAllocated,
  ticketsSold,
  hostedBy,
  showPurchaseButton = false,
  onClick = null,
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

      {showPurchaseButton ? (
        <PurchaseButton
          onClick={() => {
            if (onClick !== null) {
              onClick(id);
            }
          }}
        >
          Purchase
        </PurchaseButton>
      ) : null}

      <Footer>
        <span>hosted by {hostedBy}</span>
        <span>
          {ticketsSold}/{ticketsAllocated} tickets sold
        </span>
      </Footer>
    </Container>
  );
}
