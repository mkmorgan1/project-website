import App from '../client/components/App.jsx';

const testFunc = (a, b) => {
  return a + b;
}

test('adds two numbers', () => {
  expect(testFunc(1, 2)).toBe(3);
});

test('multiplies two numbers', () => {
  expect(testFunc(1, 2)).toBe(2);
});