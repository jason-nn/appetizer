import React, { useContext, useState, useMemo } from 'react';
import styled from 'styled-components';

import Main from '../components/shared/Main';
import Navbar from '../components/shared/Navbar';
import Modal from '../components/shared/Modal';

import Raffles from '../components/participate/Raffles';
import Purchases from '../components/participate/Purchases';
import Buy from '../components/participate/Buy';

import { Context } from '../App';

const Grid = styled.div`
  width: 100vw;
  min-height: calc(100vh - 70px);
  background-color: #f8f9fb;

  margin-top: 70px;

  display: grid;
  grid-template-columns: 2.5fr 7.5fr;
`;

const LeftPanel = styled.div`
  padding: 30px 60px;

  position: sticky; // See link
  top: 70px; //to make it stick to the top of the screen
  height: calc(100vh - 70px); // make the height equal to 100 view height

  p {
    font-family: 'CircularStd-Medium', Helvetica, sans-serif;
    font-size: 20px;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 8px 100px 100px 8px;
    border-left: 5px solid transparent;

    cursor: pointer;
  }

  p:hover {
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
    border-left: 5px solid white;
  }

  .selected {
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
    border-left: 5px solid #a83232;
  }

  .selected:hover {
    border-left: 5px solid #a83232;
  }
`;

const RightPanel = styled.div`
  overflow: scroll;
`;

export default function Host() {
  const context = useContext(Context);

  const [showBrowseRaffles, setShowBrowseRaffles] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRaffleIndex, setSelectedRaffleIndex] = useState(null);

  const selectedRaffle = useMemo(() => {
    for (let raffle of context.rafflesArray) {
      if (raffle.id === selectedRaffleIndex) {
        return raffle;
      }
    }
  }, [selectedRaffleIndex, context.rafflesArray]);

  return (
    <div>
      <Navbar />
      {context.isLoggedIn ? (
        <div>
          <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <Buy selectedRaffle={selectedRaffle} setIsOpen={setIsOpen} />
          </Modal>

          <Grid>
            <LeftPanel>
              <p
                onClick={() => {
                  setShowBrowseRaffles(true);
                }}
                className={showBrowseRaffles ? 'selected' : null}
              >
                Browse raffles
              </p>
              <p
                onClick={() => {
                  setShowBrowseRaffles(false);
                }}
                className={showBrowseRaffles ? null : 'selected'}
              >
                Purchases
              </p>
            </LeftPanel>
            <RightPanel>
              {showBrowseRaffles ? (
                <Raffles
                  onClick={(i) => {
                    setIsOpen(true);
                    setSelectedRaffleIndex(i);
                  }}
                />
              ) : (
                <Purchases />
              )}
            </RightPanel>
          </Grid>
        </div>
      ) : (
        <Main />
      )}
    </div>
  );
}
