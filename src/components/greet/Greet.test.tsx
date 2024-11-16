import { render, screen } from "@testing-library/react"
import Greet from "./greet"

// it이든 test든 상관없이 사용가능하다
describe('Greet', () => {
  // test.only
  fit('Greet renders correctly', () => { 
    render(<Greet/>)
    const textElement = screen.getByText(/hello/i)
    expect(textElement).toBeInTheDocument()
  })
  
  describe('Nested describe', () => {
    
    // test.skip
    xit('Greet renders with a name', () => {
      render(<Greet name='wontae' />)
      const textElement = screen.getByText('Hello wontae')
      expect(textElement).toBeInTheDocument()
    })
  })

}) 
