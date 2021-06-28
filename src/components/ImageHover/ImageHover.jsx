import React from "react";
import { Container, Text, Image } from "./ImageHoverStyles";

export default function ImageHover() {
  return (
    <Container>
      <Text className="text">
        <h4>Shelby GR-1 concept car</h4>
        <p>by Sherlock77 (James)</p>
      </Text>

      <Image className="one" />
      <Image className="two" />
    </Container>
  )
}
