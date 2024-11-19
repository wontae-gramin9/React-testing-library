import { renderHook } from "@testing-library/react"
import { useCounter } from "./useCounter"


describe('useCounter', () => { 
  test('should render the initial count', () => { 
    // hook은 JSX를 return하지 않고 component 밖에서 call될수도 없다
    // 따라서 render()로 테스트할 수 없다.
    // result.current에 hook의 return값이 들어있다.
    const { result : {current:  {count} }}= renderHook(useCounter)
    expect(count).toBe(0)
  })

  test('should accept and render the same initial count', () => { 
    // hook에 initial prop 주는 법
    renderHook(useCounter, {
      initialProps: {
        initialCount: 0
      }
    })
  })
})