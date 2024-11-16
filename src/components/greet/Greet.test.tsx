import { render, screen } from "@testing-library/react"
import Greet from "./greet"

// Greet should render 'Hello'
test('Greet renders correctly', () => {
  render(<Greet/>)
  const textElement = screen.getByText(/hello/i)
  expect(textElement).toBeInTheDocument()
})

test('Greet renders with a name', () => {
  render(<Greet name='wontae' />)
  const textElement = screen.getByText('Hello wontae')
  expect(textElement).toBeInTheDocument()
})
