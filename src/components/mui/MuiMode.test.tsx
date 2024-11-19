import { render, screen } from "../../test-utils"
import MuiMode from "./MuiMode"

describe('MuiMode', () => {
  test('renders properly', () => { 
    render(<MuiMode/>)  
    const headingElement = screen.getByRole('heading')
    expect(headingElement).toHaveTextContent(/dark mode/i)
  })
})