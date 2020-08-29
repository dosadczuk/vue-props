import { DefaultBoolean, RequiredBoolean } from '../../src/props/boolean';

describe('Boolean prop type function:', () => {
  describe('RequiredBoolean', () => {
    const prop = RequiredBoolean();

    test('has type of BooleanConstructor', () => {
      expect(prop.type).toBe(Boolean);
    });
    test('is required', () => {
      expect(prop.required).toEqual(true);
    });
  });

  describe('DefaultBoolean', () => {
    const prop = DefaultBoolean();

    test('has type of BooleanConstructor', () => {
      expect(prop.type).toBe(Boolean);
    });
    test('has default value of false', () => {
      expect(prop.default).not.toBeUndefined();
      expect(prop.default).not.toBeNull();
      expect(prop.default).toEqual(false);
    });
  });
});
