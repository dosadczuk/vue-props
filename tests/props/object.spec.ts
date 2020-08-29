import { DefaultObject, RequiredObject } from '../../src/props/object';

describe('Object prop type function:', () => {
  describe('RequiredObject', () => {
    const prop = RequiredObject();

    test('has type of ObjectConstructor', () => {
      expect(prop.type).toBe(Object);
    });
    test('is required', () => {
      expect(prop.required).toEqual(true);
    });
  });

  describe('DefaultObject', () => {
    const prop = DefaultObject();

    test('has type of ObjectConstructor', () => {
      expect(prop.type).toBe(Object);
    });
    test('has default value of empty object', () => {
      expect(prop.default).not.toBeUndefined();
      expect(prop.default).not.toBeNull();
    });
  });
});
