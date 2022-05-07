## keyof 操作符
可以获取一个类型的所有 key

exp:
```ts
interface User {
  name: string
  age: number
}

type TUser = keyof User // type TUser = 'name' | 'age'

interface Animal {
  name: string
  type: string
}

type TAnimal = keyof Animal // type TUser = 'name' | 'type'
```

## in 操作符

判断属性是否在一个类型`（'string | number | symbol'）`中。


## 循环

在使用 type 声明类型的时候，使用 `[]` 可以进行循环的处理

```ts
type Readonly<T> = {
  readonly [P in keyof T]: T[P]
}
```
