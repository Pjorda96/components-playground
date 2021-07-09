import React from "react";

import Header from "./Header";
import ProfileCard from "./ProfileCard";
import Badge from "./Badge";
import ImageHover from "./ImageHover";
import TextBubble from "./TextBubble";
import OnHover from "./OnHover";
import ProductCard from "./ProductCard";

function App() {
  return (
    <>
      <Header />
      <section>
        <ProfileCard id="profile-card" />
        <Badge />
        <ImageHover />
        <TextBubble />
        <OnHover />
        <ProductCard />
      </section>
    </>
  );
}

export default App;
