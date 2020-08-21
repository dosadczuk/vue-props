import { DefaultDate, RequiredDate } from '../../src/props/date';

describe('Date prop type function:', () => {
    describe('RequiredDate', () => {
        const prop = RequiredDate();

        test('has type of DateConstructor', () => {
            expect(prop.type).toBe(Date);
        });
        test('is required', () => {
            expect(prop.required).toEqual(true);
        });
    });

    describe('DefaultDate', () => {
        const date = new Date();
        const prop = DefaultDate(date);

        test('has type of DateConstructor', () => {
            expect(prop.type).toBe(Date);
        });
        test('has default value of date', () => {
            expect(prop.default).not.toBeUndefined();
            expect(prop.default).not.toBeNull();
            expect(prop.default).toEqual(date);
        });
    });
});
