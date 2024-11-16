import { render, screen } from "@testing-library/react"
import Greet from "./greet"

// skips this test
test.skip('Greet renders correctly', () => {
  render(<Greet/>)
  const textElement = screen.getByText(/hello/i)
  expect(textElement).toBeInTheDocument()
})

// Only runs this test
test.only('Greet renders with a name', () => {
  render(<Greet name='wontae' />)
  const textElement = screen.getByText('Hello wontae')
  expect(textElement).toBeInTheDocument()
})
