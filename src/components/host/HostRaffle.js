import React, { useContext, useState, useRef } from 'react';
import styled from 'styled-components';

import { Context } from '../../App';

const Container = styled.div`
  padding: 30px 60px;
`;

const InnerContainer = styled.div`
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

  button {
    font-size: 20px;
    margin-top: 50px;
  }

  label {
    display: block;
    margin-bottom: 0.5em;
    font-family: 'CircularStd-Medium', Helvetica, sans-serif;
    color: #a83232;
  }

  input,
  select {
    display: block;
    width: 100%;
    border-left: 0;
    border-right: 0;
    border-top: 0;
    border-radius: 0;
  }
`;

const Header = styled.div`
  background-image: linear-gradient(35deg, #a83232, #ff5b5b);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-family: 'CircularStd-Black', Helvetica, sans-serif;
  font-size: 30px;
`;

export default function HostRaffle() {
  const context = useContext(Context);

  const [type, setType] = useState('cash');

  const prizeRef = useRef(null);
  const titleRef = useRef(null);
  const ticketPriceRef = useRef(null);
  const ticketAllocationRef = useRef(null);

  const handleSubmit = () => {
    const id = context.rafflesArray[context.rafflesArray.length - 1].id + 1;

    context.setRafflesArray([
      {
        id,
        title: titleRef.current.value,
        type,
        prize: prizeRef.current.value,
        ticketPrice: ticketPriceRef.current.value,
        ticketsAllocated: ticketAllocationRef.current.value,
        ticketsSold: 0,
        hostedBy: context.currentUser.email,
      },
      ...context.rafflesArray,
    ]);
  };

  return (
    <Container>
      <InnerContainer>
        <Header>Host a new raffle</Header>

        <br />
        <br />
        <br />

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <label>Title</label>
          <input type="text" required ref={titleRef} />

          <br />
          <br />
          <br />

          <label>Type</label>
          <select
            value={type}
            onChange={(e) => {
              setType(e.target.value);
              prizeRef.current.value = null;
            }}
          >
            <option value="cash">Cash</option>
            <option value="non-cash">Non-cash</option>
          </select>

          <br />
          <br />
          <br />

          <label>{type === 'cash' ? 'Prize money' : 'Prize'}</label>
          {type === 'cash' ? (
            <input type="number" step={50} min={100} ref={prizeRef} required />
          ) : (
            <input type="text" ref={prizeRef} required />
          )}

          <br />
          <br />
          <br />

          <label>Ticket Price</label>
          <input
            type="number"
            step={5}
            min={10}
            required
            ref={ticketPriceRef}
          />

          <br />
          <br />
          <br />

          <label>Ticket Allocation</label>
          <input
            type="number"
            step={5}
            min={20}
            required
            ref={ticketAllocationRef}
          />

          <button>Host raffle</button>
        </form>
      </InnerContainer>
    </Container>
  );
}
