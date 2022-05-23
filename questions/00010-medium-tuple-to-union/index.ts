// export type TupleToUnion<T extends readonly any[]> = T extends Array<infer K> ? K : never
export type TupleToUnion<T extends readonly any[]> = T[number]

type Arr = ['1', '2', '3']

type Test = TupleToUnion<Arr> // expected to be '1' | '2' | '3'


const arr = [1, 2, 3] as const

type Test2 = TupleToUnion<typeof arr> // expected to be '1' | '2' | '3'
