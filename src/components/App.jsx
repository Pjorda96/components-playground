// import Header from "./Header";
import ProfileCard from "./ProfileCard";
import Badge from "./Badge";
import ImageHover from "./ImageHover";
import TextBubble from "./TextBubble";
import OnHover from "./OnHover";
import ProductCard from "./ProductCard";
import OutOfRange from "./OutOfRange";

export default function App() {
  return (
    <>
      {/*<Header />*/}
      <section>
        <ProfileCard id="profile-card" />
        <Badge />
        <ImageHover />
        <TextBubble />
        <OnHover />
        <ProductCard />
        <OutOfRange />
      </section>
    </>
  );
}
