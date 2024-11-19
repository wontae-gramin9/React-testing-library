import { renderHook, act } from "@testing-library/react"
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

  test('should increment count', () => { 
    const { result }= renderHook(useCounter)
    // 그냥 increment()을 하면 increment가 되지 않아 테스트가 실패한다. 왜?
    // state를 update하는 로직은 act()로 감싸져야하기 때문이다.
    // act()는 rendering(re-render), user event, data fetching 같은 unit()들이 (render trigger + side effects)
    // 다 이뤄지고 DOM이 맞춰서 반영될 때까지 기다려준다

    // act()를 쓸 때는 destructured된 hook return값을 주면 반영이 안되는 이유:

    // In JavaScript, the context of a function, also known as the value of this, is determined by how the function is invoked.
    // When a function is defined as part of an object or class, 'this' retains a reference to that object or class as its context.
    // However, when you destructure a function from an object and assign it to a new variable, 
    // the context of the function is not preserved.
    // This means that the new variable holding the function reference does not retain the original context of the function.
    // 여기서는 increment를 destructure해서 increment라는 변수에 넣었으므로, this는 같은 스코프인 test가 된다.
    act(() => result.current.increment())
    expect(result.current.count).toBe(1)
  })

  test('should decrement count', () => { 
    const { result }= renderHook(useCounter)
    act(() => result.current.decrement())
    expect(result.current.count).toBe(-1)
  })
})