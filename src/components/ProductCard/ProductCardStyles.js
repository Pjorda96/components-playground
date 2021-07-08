import styled from "styled-components";
import Car from '../../assets/images/car.jpg'

const width = '300px';
const height = '190px';
const cartWidth = 160;
const bookmarkWidth = 40;
const cartRadius = '50px';
const bookmarkRadius = '50px';

export const Container = styled.div`
  position: relative;
  width: ${width};
  height: 420px;
  box-shadow: 0 10px 15px rgba(181, 181, 181, .7);
  background: #f0f0f0;
`;

export const ProductImg = styled.div`
  width: ${width};
  height: ${height};
  background: url(${Car}) 0 -200px / cover;
`;

export const ProductDetail = styled.div`
  width: ${width};
  height: ${height};
  background: #21222d;
  border-radius: 0 40% 0 0;
  padding: .8rem;
  color: #fff;
  
  p {
    font-size: .8rem;
    color: #5f5f6b
  }
`;

export const Rating = styled.div`
  font-size: .7rem;
  color: #fdcc0d;
`;

export const Buttons = styled.div`
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Price = styled.span`
  font-weight: 700;
  font-size: 1.1rem;
`;

export const Button = styled.button`
  position: relative;
  border: none;
  outline: none;
  background: #35353F;
  color: #fff;
  height: ${bookmarkWidth}px;
  border-radius: ${cartRadius};
  font-size: .9rem;
  
  &.cart {
    width: ${cartWidth}px;
    
    &::before {
      width: ${cartWidth + 5}px;
      border-radius: ${cartRadius};
    }
  }
  
  &.bookmark {
    width: ${bookmarkWidth}px;
    border-radius: ${bookmarkRadius};

    &::before {
      width: ${bookmarkWidth + 5}px;
      border-radius: ${bookmarkRadius};
    }
  }
  
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid #35353f;
    height: ${bookmarkWidth + 5}px;
    transition: .3s;
  }
  
  &:hover:before {
    border-color: #fff;
  }
`;
