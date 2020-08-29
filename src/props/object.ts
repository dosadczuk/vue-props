import { PropOptions } from '../interfaces';
import { Default, Required } from './index';

/**
 * Prop with required object value.
 *
 * @param [options] Prop additional options.
 * @constructor
 *
 * @since 1.0.0
 */
export const RequiredObject = <T extends object>(options?: PropOptions<T>) => Required<T>(Object, options);

/**
 * Prop with default object value.
 *
 * @param [value={}] Prop default value.
 * @param [options] Prop additional options.
 * @constructor
 *
 * @since 1.0.0
 */
export const DefaultObject = <T extends object>(value: T = {} as T, options?: PropOptions<T>) => Default<T>(Object, () => value, options);
