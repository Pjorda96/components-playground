import styled from "styled-components";
import image from '../../assets/images/car.jpg';

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  display: flex;
  
  &:hover {
    .one {
      transform: translateX(100px);
    }
    
    .two {
      transform: translateX(-100px);
    }
    
    .text {
      width: 280px;
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
  width: 250px;
  height: 250px;
  transition: .3s;

  &.one {
    background: url(${image}) center / cover;
    z-index: -1;
    transform: translateX(125px);
    clip-path: polygon(50% 0, 65% 50%, 50% 100%, 0 100%, 0 50%, 0 0);
  }

  &.two {
    background: url(${image}) center / cover;
    transform: translateX(-125px);
    clip-path: polygon(100% 0, 100% 50%, 100% 100%, 50% 100%, 65% 50%, 50% 0);
  }
`;
