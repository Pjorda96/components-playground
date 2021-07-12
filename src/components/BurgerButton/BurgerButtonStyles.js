import styled from "styled-components";

const dimension = '80px';
const burgerWidth = '50px';
const burgerHeight = '6px';
const backColor = 'black';
const burgerLine = `
  width: ${burgerWidth};
  height: ${burgerHeight};
  background: ${backColor};
  border-radius: 5px;
  transition: all .5s ease-in-out;
`;

export const Button = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${dimension};
  height: ${dimension};
  cursor: pointer;
  transition: all .5s ease-in-out;
`;

export const Burger = styled.div`
  ${burgerLine};
  
  transform: ${p => p.open && 'translateX(-50px)'};
  background-color: ${p => p.open ? 'transparent' : backColor};
  
  &::before, &::after {
    content: "";
    position: absolute;
    ${burgerLine};
  }
  
  &::before {
    transform: ${p => p.open ? 'rotate(45deg) translate(35px, -35px)' : 'translateY(-16px)'};
  }

  &::after {
    transform: ${p => p.open ? 'rotate(-45deg) translate(35px, 35px)' : 'translateY(16px)'};
  }
`;
