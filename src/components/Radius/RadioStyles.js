import styled from 'styled-components';

const animation = anim => `animation: ${anim} 0.9s forwards 0.1s;`;
const dropX = (trans1, dim1, trans2, dim2) => `
  0% {
    opacity: 0;
    transform: ${trans1};
    ${dim1};
  }
  
  20% {
    opacity: 1;
  }
  
  100% {
    transform: ${trans2};
    ${dim2};
    opacity: 0;
  }
`;

export const StyledRadio = styled.div`
  position: relative;
  
  label:before {
    content: "";
    width: 15px;
    height: 15px;
    background: black;
    position: absolute;
    left: 7px;
    top: calc(50% - 16px);
    box-sizing: border-box;
    border-radius: 50px;
  }
  
  .touch {
    position: relative;
    width: 25px;
    height: 25px;
    left: -3px;
    top: 2px;
    border: 5px solid black;
    opacity: 0;
    border-radius: 50px;
  }
  
  input:checked ~ .touch {
    position: absolute;
    opacity: 1;
    animation: explode 0.35s;
    
    & .line.zero { ${animation('drop-zero')} }
    & .line.one { ${animation('drop-one')} }
    & .line.two { ${animation('drop-two')} }
    & .line.three { ${animation('drop-three')} }
    & .line.four { ${animation('drop-four')} }
    & .line.five { ${animation('drop-five')} }
    & .line.six { ${animation('drop-six')} }
    & .line.seven { ${animation('drop-seven')} }
  }
  
  .line {
    position: absolute;
    width: 10px;
    height: 2px;
    background-color: black;
    opacity: 0;
    
    &.zero {
      left: 11px;
      top: -21px;
      transform: translateY(20px);
      width: 2px;
      height: 10px;
    }

    &.one {
      right: -7px;
      top: -11px;
      transform: rotate(-55deg) translate(-9px);
    }

    &.two {
      right: -20px;
      top: 11px;
      transform: translate(-9px);
    }

    &.three {
      right: -8px;
      top: 35px;
      transform: rotate(55deg) translate(-9px);
    }

    &.four {
      left: -8px;
      top: -11px;
      transform: rotate(55deg) translate(9px);
    }

    &.five {
      left: -20px;
      top: 11px;
      transform: translate(9px);
    }

    &.six {
      left: -8px;
      top: 35px;
      transform: rotate(-55deg) translate(9px);
    }

    &.seven {
      left: 11px;
      bottom: -21px;
      transform: translateY(-20px);
      width: 2px;
      height: 10px;
    }
  }
  
  @keyframes explode {
    0% {
      opacity: 0;
      transform: scale(10);
    }
    
    60% {
      opacity: 1;
      transform: scale(0.5);
    }
    
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  @keyframes drop-zero {
    ${dropX(
      'translateY(20px)',
      'height: 10px',
      'translateY(-2px)',
      'height: 0'
    )};
  }
  
  @keyframes drop-one {
    ${dropX(
      'rotate(-55deg) translate(-20px)',
      'width: 10px',
      'rotate(-55deg) translate(9px)',
      'width: 0'
    )};
  }

  @keyframes drop-two {
    ${dropX(
      'translate(-20px)',
      'width: 10px',
      'translate(9px)',
      'width: 0'
    )};
  }

  @keyframes drop-three {
    ${dropX(
      'rotate(55deg) translate(-20px)',
      'width: 10px',
      'rotate(55deg) translate(9px)',
      'width: 0'
    )};
  }

  @keyframes drop-four {
    ${dropX(
      'rotate(55deg) translate(20px)',
      'width: 10px',
      'rotate(55deg) translate(-9px)',
      'width: 0'
    )};
  }

  @keyframes drop-five {
    ${dropX(
      'translate(20px)',
      'width: 10px',
      'translate(-9px)',
      'width: 0'
    )};
  }

  @keyframes drop-six {
    ${dropX(
      'rotate(-55deg) translate(20px)',
      'width: 10px',
      'rotate(-55deg) translate(-9px)',
      'width: 0'
    )};
  }

  @keyframes drop-seven {
    ${dropX(
      'translateY(-20px)',
      'height: 10px',
      'translateY(2px)',
      'height: 0'
    )};
  }
`;
