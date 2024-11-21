### Test Driven Development

You write test first before writing the software code. Once the tests have been written, you write the code that pass the tests.
1. Create tests that verify functionalities of a specific feature
2. Write software code that will run the test successfully when re-executed
3. Refactor the code for optimization while ensuring the tests continue to pass

\* Also called red-green testing as tests go from reds to green passed state as software codes written.

### What to test?

- If components render 
- If components render with props 
- If components render in different states
- If components reacts to events

### What not to test?

- Implementation details
  - Care more about how components behave, than how implemented.
- 3rd party code
  - Should care what I wroted, not a validate 3rd party
- Code that is not important to users
  - Ex, Utility functions

### Testing Process

1. Render the component
2. Find an element rendered by the component
3. Assert against the element found in step 2 which will pass or fail the test

RTL is to find and render the DOM with render(). For assertion, jest or jest-dom.

### RTL Query

- single Dom element
```
getBy...()
queryBy...()
findBy...()
```
- multiple Dom elements
```
getAllBy...()
queryAllBy...()
findAllBy...()
```

```getByRole()```: [HTML Roles](https://www.w3.org/TR/html-aria/#docconformance)

accessible name option:
- the label of a form element
- the text content of a button or
- the value of the aria-label attribute

```queryBy(), queryAllBy()```

returns the matching node for the query, return null if no elements match

- useful for asserting an element that is not present
  - if use getBy() for element that is not present, it throws an error as it cannot find the element


#### Taking Appearance & Disappearance of a DOM element into account

##### What if elements are not present in the DOM to begin with, but make their way into the DOM after some time?
For example, data fetched from a server will only be rendered after a few milleseconds.

```findBy()``` returns a Promise which resolves when an element is found.
Ofc, the Promise is rejected if no element is found or it takes more than a second.

getBy...() method를 모두 queryBy...(), findBy...()로 사용할 수 있다.


##### Priority order for queries

'The test should resember how users would interact with my code(component, page.) as much as possible'
1. getByRole
2. getByLabelText
3. getByPlaceholderText
4. getByText
5. getByDisplayValue
6. getByAltText
7. getByTitle
8. getByTestId


The suffix can be one of **Role, LableText, PlaceHolderText, Text, DisplayValue, AltText, Title and TestId**. 

### Text match 

* with Regex

```js
screen.getByText(/World/) // substring match
screen.getByText(/world/i) // substring match, ignore case(i)
screen.getByText(/^hello world$/i) // full string match, ignore case
```
* with function

```js
screen.getByText(text => text.startWith('Hello'))

```




### JEST WATCH MODE
```npm test``` starts JEST on watch mode.

Jest watches files and only executes tests that have changed from the last **GIT** commit. This is an optimization designed to run tests faster regardless of how many tests they are.

### JEST DOM matcher

Jest is by default a testing library only for JavaScript. For Dom testing, [jest-dom](https://github.com/testing-library/jest-dom)

### Filename Convention

```.test.js```, ```.test.ts```,```.test.jsx```, ```.test.tsx``` <br/>
```.spec.jsx```, ```.spec.tsx``` ...<br/>
```.js```, ```.ts```, ```.jsx``` , ```.tsx``` files in ```__test__``` folders

### Code Coverage

- statement coverage
- Branches coverage
  - 여기에서의 branch는 삼항연산자나 if/else의 '분기'를 말한다
  - null coalescing이나 short circuting은 분기로 인식하지 못한다
- Function coverage
- Line coverage

\* coverage/lcov-report/src/index.html에 coverage report가 있다.

### Debugging Testing

```js
screen.debug() // 컴파일 에러를 내지만, 렌더링된 DOM의 모습을 보여준다. 컴파일 에러를 내는 이유는, DOM 확인하고 지우라는 말이다.
```

```js
const view = render(<Component />) // DOM nodes의 role을 정리해서 보여준다
logRoles(view.container)
```

### User Interaction

with a companion ```user-event``` library, we simulate user interactions by dispatching events that would happen when the interaction took place in a browser.


- Click convenience API
```js
user.click()
user.dblclick()
user.hover()
user.unhover()
```
- Pointer low level API
```js 
user.pointer({keys: '[MouseLeft]' })
user.pointer({keys: '[MouseLeft][MouseRight]' })
user.pointer('[MouseLeft][MouseRight]') // if keys are only 'keys'
user.pointer('[MouseLeft>]') // only when pressed, not released
user.pointer('[/MouseLeft]') // released from previous press
```



#### Keyboard Interaction

- Keyboard API

```js
keyboard('foo')
```
[Keyboard API](https://testing-library.com/docs/user-event/keyboard/)

- Keyboard Utility API

```js
user.type(inputElement, stringValue)
```
- Keyboard Convenience API

```js
user.tab()
user.clear(inputElement)

test('Select and options', async () => {
  render(
    <select multiple>
      <option value='1'>1</option>
      <option value='2'>2</option>
      <option value='3'>3</option>
    </select>
  )

  // selectOptions()
  await user.selectOptions(screen.getByRole('listbox'), ['1', 'C']) // key, value 둘 다로 선택가능
  expect(screen.getByRole('option', {name:'A'}).selected).toBe(true)
  expect(screen.getByRole('option', {name:'B'}).selected).toBe(false)
  expect(screen.getByRole('option', {name:'C'}).selected).toBe(true)
  
  // deselectOptions()
  await user.deselectOptions(screen.getByRole('listbox'), ['A']) 
  expect(screen.getByRole('option', {name:'B'}).selected).toBe(false)
})

// upload
test('File upload', async () => {
  render(
    <div>
      <label for='file-uploader'>Upload file:</label>
      <input type='file' id='file-uploader'/>
    </div>
  )

  const file = new File(['hello'], 'hello.png', {type: 'image/png'})
  const input = screen.getByLableText(/upload file/i)
  await user.upload(input, file) 

  expect(input.files[0]).toBe(file)
  expect(input.files.item(0)).toBe(file)
  expect(input.files).toHaveLength(1)
})
```

- Keyboard Clipboard API
```js
user.copy()
user.cut()
user.paste()
```

### Static Analysis Testing

Process of verifying that the code meets certain expectations without actually running it. It analyses aspects such as readability, consistency, error handling, type checking, and alignment with best practices. In other words, how the code itself is written. Run testing and static analysis are complement to each other. 

- TypeScript
  - Type consistency
- Eslint
  - A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, making code more consistent and avoiding bugs
  - 여태껏 vscode extension에 Eslint가 있었음에도 작동하지 않은 이유
    - vscode extension 뿐만 아니라, 프로젝트에도 직접 eslint 설정을 해줘야 한다.
    - eslint 설정을 해주면, 코드를 작성할때 vscode가 squiggly line으로 알려준다.
    - npm script를 실행하면 프로젝트 전체를 스캔한 뒤 한번에 알려주는 것
- Prettier
  - Prettier도 마찬가지로 vscode extension 뿐만 아니라, 프로젝트에도 직접 eslint 설정을 해줘야 한다.
  - 0.0.1만 차이나도 포매팅이 달라질 수 있으니 팀원들끼리 버전 꼭 맞춰라
  - npm script를 실행하면 프로젝트 전체를 룰에 맞춰 format해준다.
- Husky
- lint-staged