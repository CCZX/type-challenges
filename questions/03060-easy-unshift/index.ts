export type Unshift<T extends any[], K> = [K, ...T]

type ARR = Unshift<[1,2], 0>
