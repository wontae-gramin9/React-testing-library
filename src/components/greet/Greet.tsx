type GreetProps = {
  name?: string
}

export default function Greet(props: GreetProps) {
  const {name} = props
  return (
    <div>Hello {name}</div>
  )
}
