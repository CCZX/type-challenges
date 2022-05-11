export type Concat<A extends readonly any[], B extends readonly any[]> = [...A, ...B]

type R = Concat<[1], [2]>
