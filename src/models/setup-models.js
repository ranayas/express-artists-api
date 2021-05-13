import { Album, definer as albumDefiner } from './album'
import { Artist, definer as artistDefiner } from './artist'
import { Genre, definer as genreDefiner } from './genre'

export const definers = [artistDefiner, genreDefiner, albumDefiner]

export function defineRelationships() {
  Artist.hasMany(Album)
  Album.belongsTo(Artist)
  Album.belongsToMany(Genre, { through: 'Album_Genre' })
  Genre.belongsToMany(Album, { through: 'Album_Genre' })
}
