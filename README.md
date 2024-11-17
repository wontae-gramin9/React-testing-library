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

The suffix can be one of **Role, LableText, PlaceHolderText, Text, DisplayValue, AltText, Title and TestId**. 

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
