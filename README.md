### Test Driven Development

You write test first before writing the software code. Once the tests have been written, you write the code that pass the tests.
1. Create tests that verify functionalities of a specific feature
2. Write software code that will run the test successfully when re-executed
3. Refactor the code for optimization while ensuring the tests continue to pass

\* Also called red-green testing as tests go from reds to green passed state as software codes written.

##### JEST WATCH MODE
```npm test``` starts JEST on watch mode.

Jest watches files and only executes tests that have changed from the last **GIT** commit. This is an optimization designed to run tests faster regardless of how many tests they are.
