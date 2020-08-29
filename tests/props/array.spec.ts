import { DefaultArray, RequiredArray } from '../../src/props/array';

describe('Array prop type function:', () => {
  describe('RequiredArray', () => {
    const prop = RequiredArray();

    test('has type of ArrayConstructor', () => {
      expect(prop.type).toBe(Array);
    });
    test('is required', () => {
      expect(prop.required).toEqual(true);
    });
  });

  describe('DefaultArray', () => {
    const prop = DefaultArray();

    test('has type of ArrayConstructor', () => {
      expect(prop.type).toBe(Array);
    });
    test('has default value of empty array', () => {
      expect(prop.default).not.toBeUndefined();
      expect(prop.default).not.toBeNull();
    });
  });
});
