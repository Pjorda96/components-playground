import styled from "styled-components";
import image from '../../assets/images/car.jpg';

const size = 400;
const translation = 100;

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  display: flex;
  
  &:hover {
    .one {
      transform: translateX(${translation}px);
    }
    
    .two {
      transform: translateX(-${translation}px);
    }
    
    .text {
      width: ${size + 30}px;
    }
  }
`;

export const Text = styled.div`
  position: absolute;
  right: 35%;
  top: 25%;
  width: 0;
  height: 150%;
  background: white;
  transition: .2s ease;
  box-shadow: 0 5px 10px rgba(0, 0, 0, .1);
  overflow: hidden;
  padding: 1rem .5rem;
  
  p {
    color: #bfbfbf;
    margin: .5rem 0;
  }
`;

export const Image = styled.div`
  width: ${size}px;
  height: ${size}px;
  transition: .3s;

  &.one {
    background: url(${image}) center / cover;
    z-index: -1;
    transform: translateX(${size / 2}px);
    clip-path: polygon(50% 0, 65% 50%, 50% 100%, 0 100%, 0 50%, 0 0);
  }

  &.two {
    background: url(${image}) center / cover;
    transform: translateX(-${size /2}px);
    clip-path: polygon(100% 0, 100% 50%, 100% 100%, 50% 100%, 65% 50%, 50% 0);
  }
`;
