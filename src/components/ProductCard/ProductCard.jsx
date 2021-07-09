import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import {
  Global, Container, ProductImg, ProductDetail,
  Title, Rating, Buttons, Price, Button,
  ProductCard as StyledProductCard, CardTag, CardHeader, CardBody,
  ProductTitle, ProductStatus, ProductPrice,
  CardFooter, CardButton
} from './ProductCardStyles';
import Car from '../../assets/images/car.jpg';

export default function ProductCard() {
  return (
    <Global>
      <Container>
        <ProductImg />

        <ProductDetail>
          <Title>Canon canonet</Title>

          <Rating>
            <FontAwesomeIcon icon={faStar} aria-hidden />
            <FontAwesomeIcon icon={faStar} aria-hidden />
            <FontAwesomeIcon icon={faStar} aria-hidden />
            <FontAwesomeIcon icon={faStar} aria-hidden />
            <FontAwesomeIcon icon={faStar} aria-hidden />
            <FontAwesomeIcon icon={faStarHalf} aria-hidden />
          </Rating>

          <p>
            Jamón ipsum litros fabada los paliza sidra. Gato encerrado una fiesta pero trapicheo por la cara.
          </p>

          <Buttons>
            <Price>50 €</Price>

            <Button className="cart">Buy now</Button>
            <Button className="bookmark"><FontAwesomeIcon icon={faHeart} aria-hidden /></Button>
          </Buttons>
        </ProductDetail>
      </Container>


      <StyledProductCard>
        <CardTag>#1 Best seller</CardTag>

        <CardHeader>
          <img src={Car} alt="Product"/>
        </CardHeader>

        <CardBody>
          <ProductTitle>Shelby GR-1 concept car</ProductTitle>
          <ProductStatus>by Sherlock77 (James)</ProductStatus>
          <ProductPrice>1000 €</ProductPrice>
        </CardBody>

        <CardFooter>
          <CardButton className="secondary">Save</CardButton>
          <CardButton className="primary">Rent</CardButton>
        </CardFooter>
      </StyledProductCard>
    </Global>
  )
}
