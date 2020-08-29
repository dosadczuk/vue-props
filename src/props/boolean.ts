import { PropOptions } from '../interfaces';
import { Nullable } from '../types';
import { Default, Required } from './index';

/**
 * Prop with required boolean value.
 *
 * @param [options] Prop additional options.
 * @constructor
 *
 * @since 1.0.0
 */
export const RequiredBoolean = (options?: PropOptions<boolean>) => Required<boolean>(Boolean, options);

/**
 * Prop with default boolean value.
 *
 * @param [value=false] Prop default value.
 * @param [options] Prop additional value.
 * @constructor
 *
 * @since 1.0.0
 */
export const DefaultBoolean = (value: Nullable<boolean> = false, options?: PropOptions<boolean>) => Default<boolean>(Boolean, value, options);
