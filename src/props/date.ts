import { PropOptions } from '../interfaces';
import { Nullable } from '../types';
import { Default, Required } from './index';

/**
 * Prop with required date value.
 *
 * @param [options] Prop additional options.
 * @constructor
 *
 * @since 1.0.0
 */
export const RequiredDate = (options?: PropOptions<Date>) => Required<Date>(Date, options);

/**
 * Prop with default date value.
 *
 * @param [value=Date()] Prop default value.
 * @param [options] Prop additional value.
 * @constructor
 *
 * @since 1.0.0
 */
export const DefaultDate = (value: Nullable<Date> = new Date(), options?: PropOptions<Date>) => Default<Date>(Date, value, options);
