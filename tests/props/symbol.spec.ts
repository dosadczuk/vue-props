import { DefaultSymbol, RequiredSymbol } from '../../src/props/symbol';

describe('Symbol prop type function:', () => {
  describe('RequiredSymbol', () => {
    const prop = RequiredSymbol();

    test('has type of SymbolConstructor', () => {
      expect(prop.type).toBe(Symbol);
    });
    test('is required', () => {
      expect(prop.required).toEqual(true);
    });
  });

  describe('DefaultSymbol', () => {
    const symbol = Symbol();
    const prop = DefaultSymbol(symbol);

    test('has type of SymbolConstructor', () => {
      expect(prop.type).toBe(Symbol);
    });
    test('has default value of new symbol', () => {
      expect(prop.default).not.toBeUndefined();
      expect(prop.default).not.toBeNull();
      expect(prop.default).toEqual(symbol);
    });
  });
});
