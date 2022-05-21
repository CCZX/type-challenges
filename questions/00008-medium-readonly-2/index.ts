export type Pick<T, K extends keyof T> = {
  [P in K]: T[P]
}

export type Exclude<T, K> = T extends K ? never : T

export type Omit<T, K> = {
  [P in Exclude<keyof T, K>]: T[P]
}

export type Readonly<T, K extends keyof T = keyof T> = {
  [P in keyof T as (P extends K ? never : P)]: T[P];
} & {
  readonly [P in K]: T[P]
}

export type PickAndReadonly<T, K extends keyof T> = {
  readonly [P in K]: T[P]
}
export type Readonly2<T, K extends keyof T = keyof T> = PickAndReadonly<T, K> & Omit<T, K>

interface Todo {
  title: string
  description: string
  completed: boolean
}

const todo: Readonly<Todo, 'title' | 'description'> = {
  title: "Hey",
  description: "foobar",
  completed: false,
}

todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property
todo.completed = true // OK

const todo2: Readonly2<Todo, 'title' | 'description'> = {
  title: "Hey",
  description: "foobar",
  completed: false,
}

todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property
todo.completed = true // OK

