import { render, screen } from '@testing-library/react'
import CounterTwo from './CounterTwo'
import userEvent from '@testing-library/user-event'

describe('CounterTwo', () => {
  test('renders properly', () => {
    render(<CounterTwo count={0} />)
    const textElement = screen.getByText(/CounterTwo/i)
    expect(textElement).toBeInTheDocument()
  })

  test('handlers are called', async () => {
    // Mock Function
    // Do not care about the actual implementation of the function
    const incrementHandler = jest.fn()
    const decrementHandler = jest.fn()
    render(
      <CounterTwo
        count={0}
        handleIncrement={incrementHandler}
        handleDecrement={decrementHandler}
      />,
    )
    const incrementButton = screen.getByRole('button', { name: 'Increment' })
    const decrementButton = screen.getByRole('button', { name: 'Decrement' })
    const user = userEvent.setup()
    await user.click(incrementButton)
    await user.click(decrementButton)

    expect(incrementHandler).toHaveBeenCalledTimes(1)
    expect(decrementHandler).toHaveBeenCalledTimes(1)
  })
})
