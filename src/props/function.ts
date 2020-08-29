import { PropOptions } from '../interfaces';
import { Nullable } from '../types';
import { Default, Required } from './index';

/**
 * Prop with required function value.
 *
 * @param [options] Prop additional options.
 * @constructor
 *
 * @since 1.0.0
 */
// @ts-ignore
export const RequiredFunction = <T extends Function>(options?: PropOptions<T>) => Required<T>(Function, options);

/**
 * Prop with default function value.
 *
 * @param value Prop default value.
 * @param [options] Prop additional options.
 * @constructor
 *
 * @since 1.0.0
 */
// @ts-ignore
export const DefaultFunction = <T extends Function>(value: Nullable<T>, options?: PropOptions<T>) => Default<T>(Function, value, options);
