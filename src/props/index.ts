import { PropType as VuePropType } from 'vue';

export type Nullable<T> = T | null;

type PropType<T> = VuePropType<T>;
type PropDefault<T> = Nullable<T> | NonNullable<() => T>;

export interface PropOptions<T, D = T> {
  type?: PropType<T>;
  required?: boolean;
  default?: PropDefault<D>;
  validator?(value: T): boolean;
}

export const Prop = <T>(type: PropType<T>, o?: PropOptions<T>): PropOptions<T> => ({ type, ...o });
export const Required = <T>(t: PropType<T>, o?: PropOptions<T>): PropOptions<T> => Prop<T>(t, { required: true, ...o });
export const Default = <T>(t: PropType<T>, v: PropDefault<T>, o?: PropOptions<T>): PropOptions<T> => Prop<T>(t, { default: v, ...o });
