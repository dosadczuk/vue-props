import { Default, PropOptions, Required } from './index';

/**
 * Prop with required array value.
 *
 * @param [options] Prop additional options.
 * @constructor
 *
 * @since 1.0.0
 */
export const RequiredArray = <T>(options?: PropOptions<T[]>) => Required<T[]>(Array, options);

/**
 * Prop with default array value.
 *
 * @param [value=[]] Prop default value.
 * @param [options] Prop additional options.
 * @constructor
 *
 * @since 1.0.0
 */
export const DefaultArray = <T>(value: T[] = [], options?: PropOptions<T[]>) => Default<T[]>(Array, () => value, options);


