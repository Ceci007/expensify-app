const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `hello, ${name}!`;

test('Should add two numbers', () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

test('Should return a greeting and a name', () => {
  const result = generateGreeting('Ceci');
  expect(result).toBe('hello, Ceci!')
});

test('Should return a greeting for no name', () => {
  const result = generateGreeting();
  expect(result).toBe('hello, Anonymous!');
})