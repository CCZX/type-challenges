// export type If<C extends (...args: any[]) => any, T, F> =
// C extends (...args: any[]) => infer R
// ? 
//   R extends true ? T :F
// : F

export type IfFunction<C extends (...args: any[]) => boolean, T, F> = ReturnType<C> extends true ? T : F
export type If<C extends boolean, T, F> = C extends true ? T : F

const yes: () => true = () => true
const no: () => false = () => false

type A = If<true, 'a', 'b'>
type B = If<false, 'a', 'b'>

type Y = IfFunction<typeof yes, 'y', 'f'>
