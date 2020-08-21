import { DefaultNumber, RequiredNumber } from '../../src/props/number';

describe('Number prop type function:', () => {
    describe('RequiredNumber', () => {
        const prop = RequiredNumber();

        test('has type of NumberConstructor', () => {
            expect(prop.type).toBe(Number);
        });
        test('is required', () => {
            expect(prop.required).toEqual(true);
        });
    });

    describe('DefaultNumber', () => {
        const prop = DefaultNumber();

        test('has type of NumberConstructor', () => {
            expect(prop.type).toBe(Number);
        });
        test('has default value of 0', () => {
            expect(prop.default).not.toBeUndefined();
            expect(prop.default).not.toBeNull();
            expect(prop.default).toEqual(0);
        });
    });
});
