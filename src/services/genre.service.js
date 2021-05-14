import Boom from 'boom'
import { Genre } from '../models/genre'

export function create(name) {
  return Genre.create({ name })
}

export function getAll() {
  return Genre.findAll()
}

export async function get(id) {
  const genre = await Genre.findByPk(id)

  if (!genre) {
    throw Boom.notFound(`Genre with id ${id} not found`)
  }

  return genre
}

export async function update({ id, name }) {
  const genre = await get(id)
  return genre.update({ name })
}

export async function remove(id) {
  const genre = await get(id)
  return genre.destroy()
}
