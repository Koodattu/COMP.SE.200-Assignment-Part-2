import isEmpty from '../src/isEmpty';

describe('isEmpty', () => {
  test('should return true for null or undefined', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
  });

  test('should return true for empty arrays', () => {
    expect(isEmpty([])).toBe(true);
  });

  test('should return false for non-empty arrays', () => {
    expect(isEmpty([1])).toBe(false);
  });

  test('should return true for empty objects', () => {
    expect(isEmpty({})).toBe(true);
  });

  test('should return false for non-empty objects', () => {
    expect(isEmpty({ a: 1 })).toBe(false);
  });

  test('should return true for empty strings', () => {
    expect(isEmpty('')).toBe(true);
  });

  test('should return false for non-empty strings', () => {
    expect(isEmpty('a')).toBe(false);
  });

  test('should return true for empty maps and sets', () => {
    expect(isEmpty(new Map())).toBe(true);
    expect(isEmpty(new Set())).toBe(true);
  });

  test('should return false for non-empty maps and sets', () => {
    const map = new Map();
    map.set('a', 1);
    expect(isEmpty(map)).toBe(false);

    const set = new Set();
    set.add(1);
    expect(isEmpty(set)).toBe(false);
  });
});
