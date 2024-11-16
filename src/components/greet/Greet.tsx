import { GreetProps } from "./greet.types"

export default function Greet(props: GreetProps) {
  const {name} = props
  return (
    <div>Hello {name ? name : 'Guest'}</div> // branch coverage
  )
}
