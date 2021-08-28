import OutOfRange from "../../components/OutOfRange";
import Radio from "../../components/Radius";

export default function Forms() {
  return (
    <>
      <OutOfRange />
      <div style={{ display: "flex" }}>
        <Radio label="Radio !" name="radio" checked />
        <Radio label="Button" name="radio" />
        <Radio label="Animation" name="radio" />
      </div>
    </>
  )
}
