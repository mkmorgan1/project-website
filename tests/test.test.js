import App from '../client/components/App.jsx';

const testFunc = (a, b) => {
  return a + b;
};
const testMoney = (a, b, callback) => {
  return '$' + callback(a, b);
};

describe('adds two numbers', () => {
  test('1, 2 => 3', () => {
    expect(testFunc(1, 2)).toBe(3);
  });
  test('1, 3 => 4', () => {
    expect(testFunc(1, 3)).toBe(4);
  });
});

describe('money', () => {
  test('1, 2 => $3', () => {
    const testFunc = jest.fn(() => 3);
    expect(testMoney(1, 2, testFunc)).toBe('$3');
  });
  test('1, 3 => $4', () => {
    const testFunc = jest.fn(() => 4);
    expect(testMoney(1, 3, testFunc)).toBe('$4');
  });
});

describe('<App/>', () => {
  test('<App/>', () => {
    expect(testFunc(1,2)).toBe(3);
  });
})

// describe(
