import { DefaultFunction, RequiredFunction } from '../../src/props/function';

describe('Function prop type function:', () => {
  describe('RequiredFunction', () => {
    const prop = RequiredFunction();

    test('has type of FunctionConstructor', () => {
      expect(prop.type).toBe(Function);
    });
    test('is required', () => {
      expect(prop.required).toEqual(true);
    });
  });

  describe('DefaultFunction', () => {
    const prop = DefaultFunction(() => true);

    test('has type of FunctionConstructor', () => {
      expect(prop.type).toBe(Function);
    });
    test('has default value of true function', () => {
      expect(prop.default).not.toBeUndefined();
      expect(prop.default).not.toBeNull();
    });
  });
});
