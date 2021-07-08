import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import {
  Container,
  ProductImg,
  ProductDetail,
  Rating,
  Buttons,
  Price,
  Button
} from './ProductCardStyles';

export default function ProductCard() {
  return (
    <Container>
      <ProductImg />

      <ProductDetail>
        <span>Canon canonet</span>

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
  )
}
