import calculate from './calculate';

describe('calculate', () => {
  it('should return the correct result based on input object and string', () => {
    const result = calculate(
      {
        total: '5',
        next: '6',
        operation: '+',
      },
      '=',
    );
    expect(result).toEqual({
      total: '11',
      next: null,
      operation: null,
    });
  });
});
