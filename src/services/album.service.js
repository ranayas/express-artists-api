import { Album } from '../models/album'

export async function create({ title, dateRelease }) {
  return Album.create({ title, dateRelease })
}
