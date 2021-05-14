import Boom from 'boom'
import { Artist } from '../models/artist'

export function create(name) {
  return Artist.create({ name })
}

export async function get(id) {
  const artist = await Artist.findByPk(id)

  if (!artist) {
    throw Boom.notFound(`User whit id ${id} not found`)
  }

  return artist
}

export function getAll() {
  return Artist.findAll()
}

export async function update({ id, name }) {
  const user = await get(id)
  return user.update({ name })
}

export async function remove(id) {
  const user = await get(id)
  return user.destroy()
}
