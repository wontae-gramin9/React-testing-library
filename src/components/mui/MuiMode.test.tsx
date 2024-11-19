import { render, screen } from "@testing-library/react"
import MuiMode from "./MuiMode"
import AppProviders from "../../providers/AppProviders"

describe('MuiMode', () => {
  test('renders properly', () => { 
    // As we are not importing App but MuiMode, wrapped by a provider
    // we need to wrap it
    render(<MuiMode/>, {
      wrapper: AppProviders
    })  
    const headingElement = screen.getByRole('heading')
    expect(headingElement).toHaveTextContent(/dark mode/i)
  })
})