import styled from "styled-components";

const width = 100;
const height = width * .4;
const before = height - 8;

export const Toggle = styled.input`
  -webkit-appearance: none;
  appearance: none;
  position: relative;
  width: ${width}px;
  height: ${height}px;
  border: .2rem solid #d9d9d9;
  outline: none;
  border-radius: ${width * .3}px;
  transition: .3s;
  
  &::before {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    width: ${before}px;
    height: ${before}px;
    background: #cccccc;
    border-radius: 50%;
    transition: .3s ease;
  }
  
  &:checked {
    border-color: #3399ff;
    
    &:before {
      transform: translateX(${width * .6}px);
      background: #3399ff;
    }
  }
`;
