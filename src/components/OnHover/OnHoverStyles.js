import styled from "styled-components";

export const Button = styled.button`
  display: block;
  margin: 10px;
  background-color: ${props => props.hovered ? 'greenyellow' : 'deepskyblue'};
`;

export const Container = styled.div`
  display: ${props => props.show ? 'inline-block' : 'none'};
  background-color: grey;
  color: white;
`;
