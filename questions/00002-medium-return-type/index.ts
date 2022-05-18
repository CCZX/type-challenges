export type ReturnType<T extends (...args: any[]) => any> =
T extends (...args: any[]) => infer R
? R
: never

const f1 = () => ({a: 1})
const f2 = () => 123

type F1 = ReturnType<typeof f1>
type F2 = ReturnType<typeof f2>
