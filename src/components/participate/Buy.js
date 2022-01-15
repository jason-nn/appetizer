import React, { useContext, useState } from 'react';
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

export default function Buy({ selectedRaffle }) {
  const context = useContext(Context);

  const [numberOfTickets, setNumberOfTickets] = useState(1);

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
          <Total>
            Total:{' '}
            {context.toCurrency(numberOfTickets * selectedRaffle.ticketPrice)}
          </Total>
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
