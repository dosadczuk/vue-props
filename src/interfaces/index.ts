import { PropDefault, PropType } from '../types';

export interface PropOptions<T, D = T> {
  type?: PropType<T>;
  required?: boolean;
  default?: PropDefault<D>;
  validator?(value: T): boolean;
}
