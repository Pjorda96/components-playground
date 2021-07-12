import styled from "styled-components";

export const Input = styled.input`
  margin-top: 10px;

  -moz-appearance: textfield;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  &:out-of-range {
    border-color: red;
  }
`;
