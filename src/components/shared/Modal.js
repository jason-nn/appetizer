import React from 'react';
import styled from 'styled-components';

const GrayOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  z-index: 1;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(6px);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainContent = styled.div`
  background-color: white;
  padding: 30px;
  padding-bottom: 50px;
  border-radius: 8px;
  max-width: 90vw;
`;

const Close = styled.div`
  cursor: pointer;
  font-family: 'CircularStd-Medium', Helvetica, sans-serif;

  :hover {
    color: #a83232;
  }

  display: flex;
  justify-content: flex-end;

  margin-bottom: 20px;
`;

export default function Modal({ isOpen, setIsOpen, children }) {
  return (
    <div>
      {isOpen ? (
        <GrayOverlay>
          <MainContent>
            <Close onClick={() => setIsOpen(false)}>
              <span class="material-icons">close</span>
            </Close>
            {children}
          </MainContent>
        </GrayOverlay>
      ) : null}
    </div>
  );
}
