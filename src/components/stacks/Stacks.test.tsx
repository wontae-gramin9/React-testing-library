import { logRoles, render, screen} from "@testing-library/react"
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
  
  test('not renders Start learning button', () => {
    render(<Stacks stacks={stacks}/>)
    const startLearningButton = screen.queryByRole('button', {
      name: 'Start learning'
    })
    expect(startLearningButton).not.toBeInTheDocument()
  })

  test('eventually renders Start learning button',async () => {
    // screen.debug()

    const view = render(<Stacks stacks={stacks}/>)
    logRoles(view.container)
    const startLearningButton = await screen.findByRole('button', {
      name: 'Start learning'
    }, {
      timeout: 2000,
    })
    expect(startLearningButton).toBeInTheDocument()
  })
})
