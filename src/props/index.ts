import { PropOptions as VuePropOptions, PropType as VuePropType } from 'vue/types/options';

export type Nullable<T> = T | null;
export type PropType<T> = VuePropType<T>;
export type PropOptions<T> = VuePropOptions<T>;
export type PropDefault<T> = Nullable<T> | NonNullable<() => T>;

export const Prop = <T>(type: PropType<T>, o?: PropOptions<T>): PropOptions<T> => ({ type, ...o });
export const Required = <T>(t: PropType<T>, o?: PropOptions<T>): PropOptions<T> => Prop<T>(t, { required: true, ...o });
export const Default = <T>(t: PropType<T>, v: PropDefault<T>, o?: PropOptions<T>): PropOptions<T> => Prop<T>(t, { default: v, ...o });
