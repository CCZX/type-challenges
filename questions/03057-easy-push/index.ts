export type Push<T extends any[], K> = [...T, K]

type Res = Push<[1, 2], '3'>
