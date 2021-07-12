import { Input } from './OutOfRangeStyles';

export default function OutOfRange() {
  return (
    <Input type="number" min="0" max="10" placeholder="Number between 0 and 10" />
  )
}
