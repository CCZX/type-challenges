export type MyExclude<T, U> = T extends U ? never : T;

type T = 'name' | 'age'

type TE = MyExclude<T, 'name'>
