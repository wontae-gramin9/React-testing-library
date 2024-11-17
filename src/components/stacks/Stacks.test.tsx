import { render, screen} from "@testing-library/react"
import Stacks from "./Stacks"

describe('Stacks', () => {
  const stacks = ['HTML','CSS','JS']
  test('renders a list', () => {
    render(<Stacks stacks={stacks}/>)
    const listElement = screen.getByRole('list')
    expect(listElement).toBeInTheDocument()
  })
  
  test('renders a list of stacks', () => {
    render(<Stacks stacks={stacks}/>)
    const listItemElement = screen.getAllByRole('listitem')
    expect(listItemElement).toHaveLength(stacks.length)
  })
})
