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
  
  test('not renders Start learning button', () => {
    render(<Stacks stacks={stacks}/>)
    // queryBy는 DOM이 없으면 null을 반환한다.
    const startLearningButton = screen.queryByRole('button', {
      name: 'Start learning'
    })
    expect(startLearningButton).not.toBeInTheDocument()
  })

  test('eventually renders Start learning button',async () => {
    render(<Stacks stacks={stacks}/>)
    // getByRole, queryByRole은 DOM이 screen에 나타날때까지 기다리지 않는다
    // findBy returns a Promise which resolves when an element is found
    const startLearningButton = await screen.findByRole('button', {
      name: 'Start learning'
    }, {
      timeout: 2000,
    })
    expect(startLearningButton).toBeInTheDocument()
  })
})
