export type Exclude<T, U> = T extends U ? never : T

export type MyOmit<T, K extends keyof T> = {
  [P in Exclude<keyof T, K>]: T[P]
}

interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyOmit<Todo, 'description' | 'title'>
