import { render, screen } from '@testing-library/react'
import Users from './Users'
import { server } from '../../mocks/server'
import { rest } from 'msw'

describe('Users', () => {
  test('renders properly', () => {
    render(<Users />)
    const textElement = screen.getByText('Users')
    expect(textElement).toBeInTheDocument()
  })
  // Mock Request(MSW)를 사용하는 이유
  // 1. react testing에 server가 잘 되는지 안되는지(real API) 상관하지 않아도 되기 때문이고,
  // 2. real API라면 테스트할 때마다 비용이 생길 수 있기 때문이다.
  // msw는 network level에서 진짜 request를 intercept해서 real API의 response를 Mock한다
  test('renders a list of users', async () => {
    render(<Users />)
    const users = await screen.findAllByRole('listitem')
    expect(users).toHaveLength(3)
  })

  test('renders error', async () => {
    // only applies to this single test
    server.use(
      rest.get(
        'https://jsonplaceholder.typicode.com/users',
        (req, res, ctx) => {
          return res(ctx.status(500))
        },
      ),
    )

    render(<Users />)
    const error = await screen.findByText(/Error fetching users/i)
    expect(error).toBeInTheDocument()
  })
})
