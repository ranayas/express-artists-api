import Boom from 'boom'
import { Artist } from '../models/artist'

export function create(name) {
  return Artist.create({ name })
}

export async function get(id) {
  const artist = await Artist.findByPk(id)

  if (!artist) {
    throw Boom.notFound(`Artist whit id ${id} not found`)
  }

  return artist
}

export function getAll() {
  return Artist.findAll()
}

export async function update({ id, name }) {
  const artist = await get(id)
  return artist.update({ name })
}

export async function remove(id) {
  const artist = await get(id)
  return artist.destroy()
}
