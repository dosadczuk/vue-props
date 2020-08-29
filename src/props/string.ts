import { PropOptions } from '../interfaces';
import { Nullable } from '../types';
import { Default, Required } from './index';

/**
 * Prop with required string value.
 *
 * @param [options] Prop additional options.
 * @constructor
 *
 * @since 1.0.0
 */
export const RequiredString = (options?: PropOptions<string>) => Required<string>(String, options);

/**
 * Prop with default string value.
 *
 * @param [value=''] Prop default value.
 * @param [options] Prop additional options.
 * @constructor
 *
 * @since 1.0.0
 */
export const DefaultString = (value: Nullable<string> = '', options?: PropOptions<string>) => Default<string>(String, value, options);
