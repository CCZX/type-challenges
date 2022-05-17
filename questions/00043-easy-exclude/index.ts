export type MyExclude<T, U> = T extends U ? never : T;

type T = 'name' | 'age' | 'id'

type TE = MyExclude<T, 'name' | 'id'>
