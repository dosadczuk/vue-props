import { Default, Nullable, PropOptions, Required } from './index';

/**
 * Prop with required number value.
 *
 * @param [options] Prop additional options.
 * @constructor
 *
 * @since 1.0.0
 */
export const RequiredNumber = (options?: PropOptions<number>) => Required<number>(Number, options);

/**
 * Prop with default number value.
 *
 * @param [value=0] Prop default value.
 * @param [options] Prop additional options.
 * @constructor
 *
 * @since 1.0.0
 */
export const DefaultNumber = (value: Nullable<number> = 0, options?: PropOptions<number>) => Default<number>(Number, value, options);
