import { useState } from "react";
import {WrapperButton, Container, Text, Image} from "./ImageHoverStyles";

export default function MiddlewareWrapper() {
  const [show, setShow] = useState(false);

  return (
    <>
      <WrapperButton onClick={() => setShow(prevState => !prevState)}>
        {show ? 'Hide' : 'Show'} image
      </WrapperButton>
      <ImageHover show={show} hide={() => setShow(false)} />
    </>
  )
}

function ImageHover({ show, hide }) {
  return (
    <Container show={show} onClick={hide}>
      <Text className="text">
        <h4>Shelby GR-1 concept car</h4>
        <p>by Sherlock77 (James)</p>
      </Text>

      <Image className="one" />
      <Image className="two" />
    </Container>
  )
}
