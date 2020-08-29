import { DefaultString, RequiredString } from '../../src/props/string';

describe('String prop type function:', () => {
  describe('RequiredString', () => {
    const prop = RequiredString();

    test('has type of StringConstructor', () => {
      expect(prop.type).toBe(String);
    });
    test('is required', () => {
      expect(prop.required).toEqual(true);
    });
  });

  describe('DefaultString', () => {
    const prop = DefaultString();

    test('has type of StringConstructor', () => {
      expect(prop.type).toBe(String);
    });
    test('has default value of empty string', () => {
      expect(prop.default).not.toBeUndefined();
      expect(prop.default).not.toBeNull();
      expect(prop.default).toEqual('');
    });
  });
});
