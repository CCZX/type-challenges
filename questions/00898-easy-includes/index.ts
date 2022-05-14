export type Includes<T extends any[], K> =
K extends T[number] ? true : false

type F = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'>
type T = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Esidisi'>
