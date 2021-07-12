import React from "react";

import ProfileCard from "./ProfileCard";
import Badge from "./Badge";
import ImageHover from "./ImageHover";
import TextBubble from "./TextBubble";
import OnHover from "./OnHover";
import ProductCard from "./ProductCard";
import BurgerButton from "./BurgerButton";

function App() {
  return (
    <section>
      <ProfileCard />
      <Badge />
      <ImageHover />
      <TextBubble />
      <OnHover />
      <ProductCard />
      <BurgerButton />
    </section>
  );
}

export default App;
