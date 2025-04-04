export type Client = {
  id?: number
  name: string
  cpf: string
  pets: Pet[]
}

export type Pet = {
  name: string
  type: 'dog' | 'cat'
  race: string
}
