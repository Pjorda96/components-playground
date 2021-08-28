import { StyledRadio } from "./RadioStyles";

export default function Radio({ label, name, checked }) {
  return (
    <StyledRadio>
      <input type="radio" name={name} defaultChecked={checked}/>
      <label htmlFor="">{label}</label>
      <div className="touch">
        <div className="line zero" />
        <div className="line one" />
        <div className="line two" />
        <div className="line three" />
        <div className="line four" />
        <div className="line five" />
        <div className="line six" />
        <div className="line seven" />
      </div>
    </StyledRadio>
  )
}
