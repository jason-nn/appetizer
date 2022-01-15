import React, { useContext, useState, useMemo, useCallback } from 'react';
import styled from 'styled-components';

import { Context } from '../../App';

const Centered = styled.div`
  display: flex;
  justify-content: center;

  button {
    font-size: 18px;
  }
`;

// const TicketPrice = styled.div`
//   font-family: 'CircularStd-Black', Helvetica, sans-serif;
//   font-size: 20px;
//   margin-bottom: 30px;
// `;

const Total = styled.div`
  font-family: 'CircularStd-Black', Helvetica, sans-serif;
  font-size: 20px;

  margin-top: 30px;
  margin-bottom: 30px;
`;

export default function Buy({ selectedRaffle, setIsOpen }) {
  const context = useContext(Context);

  const [numberOfTickets, setNumberOfTickets] = useState(1);

  const total = useMemo(() => {
    return numberOfTickets * selectedRaffle.ticketPrice;
  }, [numberOfTickets, selectedRaffle.ticketPrice]);

  const handleSubmit = useCallback(
    (numberOfTickets, raffle) => {
      if (total < context.getBalance()) {
        context.deductFunds(total);

        setIsOpen(false);

        const raffleIndex = context.findRaffleIndex(raffle.id);

        console.log(raffleIndex);
        const rafflesArrayCopy = [...context.rafflesArray];
        rafflesArrayCopy[raffleIndex].ticketsSold += numberOfTickets;

        context.setRafflesArray(rafflesArrayCopy);

        context.setPurchasesArray([
          {
            ticketsBought: numberOfTickets,
            purchasedBy: context.currentUser.email,
            raffle: {
              title: raffle.title,
              ticketPrice: raffle.ticketPrice,
            },
          },
          ...context.purchasesArray,
        ]);

        context.setMessage(
          `Successfully bought ${numberOfTickets} ${
            numberOfTickets > 1 ? 'tickets' : 'ticket'
          }`
        );
      } else {
        context.setMessage('Insufficient funds');
      }
    },
    [total, setIsOpen, context]
  );

  return (
    <div>
      {/* <Centered>
        <TicketPrice>
          Ticket Price: {context.toCurrency(selectedRaffle.ticketPrice)}
        </TicketPrice>
      </Centered> */}
      <label>Number of tickets</label>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          handleSubmit(numberOfTickets, selectedRaffle);
        }}
      >
        <input
          type="number"
          step={1}
          min={1}
          value={numberOfTickets}
          onChange={(e) => {
            setNumberOfTickets(e.target.value);
          }}
        />

        <Centered>
          <Total>Total: {context.toCurrency(total)}</Total>
        </Centered>

        <Centered>
          <button>
            Purchase {numberOfTickets}{' '}
            {numberOfTickets > 1 ? 'tickets' : 'ticket'}
          </button>
        </Centered>
      </form>
    </div>
  );
}
