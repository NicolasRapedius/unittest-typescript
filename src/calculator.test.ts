import { add, subtract, multiply, divide} from "./calculator";

test("add three to three is six", () => {
  // Arrange
  const a: number = 3;
  const b: number = 3;
  const expected: number = 6;

  // Act
  const actual = add(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("subtract four from six is two", () => {
  // Arrange
  const a: number = 6;
  const b: number = 4;
  const expected: number = 2;

  // Act
  const actual: number = subtract(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("multiply four with two is eight", () => {
  // Arrange
  const a: number = 2;
  const b: number = 4;
  const expected: number = 8;

  // Act
  const actual: number = multiply(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("divide seven with two is three and a half", () => {
  // Arrange
  const a: number = 7;
  const b: number = 2;
  const expected: number = 3.5;

  // Act
  const actual: number = divide(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("divide seven with zero throws an error", () => {
  // Arrange
  const a: number = 7;
  const b: number = 0;

  // Act
  const act = () => divide(a, b);

  // Assert
  expect(act).toThrow(Error);
});