import { useEffect, useState } from 'react'
import { StacksProps } from './Stacks.types'

export default function Stacks(props: StacksProps) {
  const { stacks } = props
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true)
    }, 500)
  }, [])

  return (
    <>
      <ul>
        {stacks.map((stack) => (
          <li key={stack}>{stack}</li>
        ))}
      </ul>
      {isLoggedIn ? (
        <button>Start learning</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </>
  )
}
