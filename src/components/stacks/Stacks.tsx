import { StacksProps } from "./Stacks.types"

export default function Stacks(props: StacksProps) {
  const {stacks} = props
  return (
    <>
      <ul>
        {stacks.map(stack => <li key={stack}>
          {stack}
        </li>
        )}
      </ul>
    </>
  )
}