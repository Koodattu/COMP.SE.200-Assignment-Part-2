import endsWith from '../src/endsWith';

describe('endsWith', () => {
  test('should return true if string ends with target', () => {
    expect(endsWith('abc', 'c')).toBe(true);
  });

  test('should return false if string does not end with target', () => {
    expect(endsWith('abc', 'b')).toBe(false);
  });

  test('should respect the position argument', () => {
    expect(endsWith('abc', 'b', 2)).toBe(true);
  });

  test('should return false for negative position', () => {
    expect(endsWith('abc', 'a', -1)).toBe(false);
  });
});
