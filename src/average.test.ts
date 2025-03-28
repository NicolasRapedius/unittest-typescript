import { mean, median} from "./average";

test("test mean of two numbers", () => {
  // Arrange
  const numbers: number[] = [2, 8];
  const expected: number = 5;

  // Act
  const actual: number = mean(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("test mean of five numbers", () => {
  // Arrange
  const numbers: number[] = [1, 2, 3, 4, 5];
  const expected: number = 3;

  // Act
  const actual: number = mean(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("test mean of no numbers", () => {
  // Arrange
  const numbers: number[] = [];

  // Act & Assert
  expect(() => mean(numbers)).toThrow(Error);
});

test("test median for odd number of elements", () => {
  // Arrange
  const numbers = [1, 2, 6, 7, 8];
  const expected = 6;

  // Act
  const actual = median(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("test median for even number of elements", () => {
  // Arrange
  const numbers = [1, 2, 5, 6, 7, 8];
  const expected = 5.5;

  // Act
  const actual = median(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("test median for no elements", () => {
  // Arrange
  const numbers = [];

  // Act & Assert
  expect(() => median(numbers)).toThrow(Error);
});

test("test median for odd number of elements", () => {
  // Arrange
  const numbers = [8, 1, 10, 2, 6, 12, 7];
  const expected = 7;

  // Act
  const actual = median(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("test median for even number of elements", () => {
  // Arrange
  const numbers = [1, 2, 5, 6, 7, 8, 10, 12];
  const expected = 6.5;

  // Act
  const actual = median(numbers);

  // Assert
  expect(actual).toBe(expected);
});
