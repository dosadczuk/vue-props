import { PropOptions } from '../interfaces';
import { Nullable } from '../types';
import { Default, Required } from './index';

/**
 * Prop with required symbol value.
 *
 * @param [options] Prop additional options.
 * @constructor
 *
 * @since 1.0.0
 */
export const RequiredSymbol = (options?: PropOptions<symbol>) => Required<symbol>(Symbol, options);

/**
 * Prop with default symbol value.
 *
 * @param [value=Symbol()] Prop default value.
 * @param [options] Prop additional options.
 * @constructor
 *
 * @since 1.0.0
 */
export const DefaultSymbol = (value: Nullable<symbol> = Symbol(), options?: PropOptions<symbol>) => Default<symbol>(Symbol, value, options);
