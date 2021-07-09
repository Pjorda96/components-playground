import styled from "styled-components";
import Car from '../../assets/images/car.jpg'

const width = '300px';
const height = '190px';
const cartWidth = 160;
const bookmarkWidth = 40;
const cartRadius = '50px';
const bookmarkRadius = '50px';
const padding = '.8rem';

export const Global = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  
  > div {
    margin-top: 10px;
  }
`;

export const Container = styled.div`
  position: relative;
  width: ${width};
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
  //height: ${height};
  background: #21222d;
  border-radius: 0 40% 0 0;
  color: #fff;
  
  p {
    font-size: .8rem;
    padding: 0 0 0 ${padding};
    color: #5f5f6b
  }
`;

export const Title = styled.span`
  padding: ${padding} 0 0 ${padding};
`;

export const Rating = styled.div`
  font-size: .7rem;
  padding: 0 0 0 ${padding};
  color: #fdcc0d;
`;

export const Buttons = styled.div`
  height: 65px;
  padding: 0 ${padding};
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

// Second Card
export const ProductCard = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, .25);
`;

export const CardTag = styled.span`
  background-color: rgba(179, 75, 248, .3);
  padding: 5px 10px;
  color: #b34bf8;
  border-radius: 2px;
`;

export const CardHeader = styled.div`
  padding: 20px 30px;
  text-align: center;
  
  img {
    max-height: 200px;
    width: auto;
  }
`;

export const CardBody = styled.div`
  
`;

export const ProductTitle = styled.h4`
  font-size: 24px;
  line-height: 1;
  color: #353535;
`;

export const ProductStatus = styled.p`
  color: #808080;
`;

export const ProductPrice = styled.h3`
  font-size: 30px;
  color: #353535;
  margin: 20px 0;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardButton = styled.button`
  padding: 10px 40px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
  cursor: pointer;
  
  &.primary {
    background-color: #b34bf8;
    color: #fff;
  }
  
  &.secondary {
    color: #808080;
  }
  
  &:first-child {
    margin-right: 15px;
  }
`;
