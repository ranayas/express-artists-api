import { Genre } from '../models/genre'

export function create(name) {
  return Genre.create({ name })
}

export function getAll() {
  return Genre.findAll()
}
