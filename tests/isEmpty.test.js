import isEmpty from "../src/isEmpty";

describe("isEmpty", () => {
  test("should return true for null or undefined", () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
  });

  test("should return true for empty arrays", () => {
    expect(isEmpty([])).toBe(true);
  });

  test("should return false for non-empty arrays", () => {
    expect(isEmpty([1])).toBe(false);
  });

  test("should return true for empty objects", () => {
    expect(isEmpty({})).toBe(true);
  });

  test("should return false for non-empty objects", () => {
    expect(isEmpty({ a: 1 })).toBe(false);
  });

  test("should return true for empty strings", () => {
    expect(isEmpty("")).toBe(true);
  });

  test("should return false for non-empty strings", () => {
    expect(isEmpty("a")).toBe(false);
  });

  test("should return true for empty maps and sets", () => {
    expect(isEmpty(new Map())).toBe(true);
    expect(isEmpty(new Set())).toBe(true);
  });

  test("should return false for non-empty maps and sets", () => {
    const map = new Map();
    map.set("a", 1);
    expect(isEmpty(map)).toBe(false);

    const set = new Set();
    set.add(1);
    expect(isEmpty(set)).toBe(false);
  });

  // test arguments
  test("should return false for arguments object", () => {
    (function () {
      expect(isEmpty(arguments)).toBe(false);
    })("test");
  });

  test("should return true for empty arguments object", () => {
    (function () {
      expect(isEmpty(arguments)).toBe(true);
    })();
  });

  // test buffers
  test("should return true for empty buffer", () => {
    expect(isEmpty(Buffer.alloc(0))).toBe(true);
  });

  test("should return false for non-empty buffer", () => {
    expect(isEmpty(Buffer.from([1, 2, 3]))).toBe(false);
  });

  // test prototype
  test("should return true for empty object with prototype", () => {
    function MyObject() {}
    MyObject.prototype.someMethod = function () {};
    const obj = new MyObject();
    expect(isEmpty(obj)).toBe(true);
  });

  test("should return false for non-empty object with prototype", () => {
    function MyObject() {}
    const obj = new MyObject();
    obj.someProperty = 1;
    expect(isEmpty(obj)).toBe(false);
  });

  test("should return true for object with no prototype", () => {
    const obj = Object.create(null); // Object with no prototype
    expect(isEmpty(obj)).toBe(true);
  });

  test("should return false for non-empty object with a custom prototype", () => {
    function MyPrototype() {}
    MyPrototype.prototype.someMethod = function () {};

    const obj = new MyPrototype();
    obj.someProperty = 1; // Adding an own property.
    expect(isEmpty(obj)).toBe(false);
  });

  // Test typed array
  test("should return true for empty typed array", () => {
    expect(isEmpty(new Int8Array(0))).toBe(true);
  });

  test("should return false for non-empty typed array", () => {
    expect(isEmpty(new Int8Array([1, 2, 3]))).toBe(false);
  });

  //test for false
  test("should return true for false", () => {
    expect(isEmpty(false)).toBe(true);
  });

  test("should return true for 0", () => {
    expect(isEmpty(0)).toBe(true);
  });

  //other
  test("should return false for object with inherited properties", () => {
    const obj = Object.create({ inheritedProp: 1 });
    expect(isEmpty(obj)).toBe(false);
  });

  test("should return true for NaN", () => {
    expect(isEmpty(NaN)).toBe(true);
  });

  test("should return false for object with symbol property", () => {
    const sym = Symbol("key");
    const obj = {};
    obj[sym] = "value";
    expect(isEmpty(obj)).toBe(false); // Object has a symbol property
  });
});
