import { Artist } from '../models/artist'

export function create(name) {
  return Artist.create({ name })
}
