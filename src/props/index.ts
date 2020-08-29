import { PropOptions } from '../interfaces';
import { PropDefault, PropType } from '../types';

export const Prop = <T>(type: PropType<T>, o?: PropOptions<T>): PropOptions<T> => ({ type, ...o });
export const Required = <T>(t: PropType<T>, o?: PropOptions<T>): PropOptions<T> => Prop<T>(t, { required: true, ...o });
export const Default = <T>(t: PropType<T>, v: PropDefault<T>, o?: PropOptions<T>): PropOptions<T> => Prop<T>(t, { default: v, ...o });
