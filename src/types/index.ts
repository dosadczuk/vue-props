import { PropType as VuePropType } from '@vue/runtime-core';

export type Nullable<T> = T | null;

export type PropType<T> = VuePropType<T>;
export type PropDefault<T> = Nullable<T> | NonNullable<() => T>;
