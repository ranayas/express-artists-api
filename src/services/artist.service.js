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

export async function getAll() {
  return Artist.findAll()
}
