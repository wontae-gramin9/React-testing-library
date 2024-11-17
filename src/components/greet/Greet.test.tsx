import { render, screen } from "@testing-library/react"
import Greet from "./Greet"

describe('Greet', () => {
  it('Greet renders correctly', () => { 
    render(<Greet/>)
    const textElement = screen.getByText(/hello/i)
    expect(textElement).toBeInTheDocument()
    // expect(DOM).matcher(value)
  })
  
  describe('Nested describe', () => {
    
    it('Greet renders with a name', () => {
      render(<Greet name='wontae' />)
      const textElement = screen.getByText('Hello wontae')
      expect(textElement).toBeInTheDocument()
    })
  })
}) 
