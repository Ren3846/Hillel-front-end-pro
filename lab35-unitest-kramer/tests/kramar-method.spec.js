// import { kramarMethod, replaceRow, getDeterminant } from '../kramar-method.js';
const { kramarMethod, replaceRow, getDeterminant } = require('../kramar-method.js');

describe('Cramer Method', () => {
  test('should calculate determinant of a matrix', () => {
    const matrix = [
      [3, 1, -7],
      [4, 5, -2],
      [1, 9, 5],
    ];

    expect(getDeterminant(matrix)).toBe(-468);
  });

  test('should replace row of a matrix', () => {
    const matrix = [
      [3, 1, -7],
      [4, 5, -2],
      [1, 9, 5],
    ];

    const expectedMatrix = [
      [4, 5, -2],
      [3, 1, -7],
      [1, 9, 5],
    ];

    expect(replaceRow(matrix, 0, 1)).toEqual(expectedMatrix);
  });

  test('should solve the system of linear equations using Cramer method', () => {
    const matrix = [
      [3, 1, -7, 28],
      [4, 5, -2, 19],
      [1, 9, 5, -14],
    ];

    const expectedSolution = { X1: 5, X2: -1, X3: -2 };

    expect(kramarMethod(matrix)).toEqual(expectedSolution);
  });

  test('should throw an error if the determinant of the main matrix is 0', () => {
    const matrix = [
      [1, 2, 3, 6],
      [4, 5, 6, 15],
      [7, 8, 9, 24],
    ];

    expect(() => kramarMethod(matrix)).toThrow(Error);
  });

  test('should throw an error if the matrix is not 3x4', () => {
    const matrix = [
      [3, 1, -7],
      [4, 5, -2],
      [1, 9, 5],
      [1, 2, 3],
    ];

    expect(() => kramarMethod(matrix)).toThrow(Error);
  });
});
