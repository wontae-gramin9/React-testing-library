import { CounterTwoProps } from "./CounterTwo.type";

export default function CounterTwo(props: CounterTwoProps) {
  const { count, handleIncrement, handleDecrement } = props
  return (
    <div>
      <h1>CounterTwo</h1>
      <p>{count}</p>
      {handleIncrement && <button onClick={() => handleIncrement()}>Increment</button> }
      {handleDecrement && <button onClick={() => handleDecrement()}>Decrement</button> }
    </div>
  )
}