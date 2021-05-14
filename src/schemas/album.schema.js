import Joi from 'joi'

// https://www.guinnessworldrecords.com/world-records/74213-longest-title-of-a-music-album
const longestTitleOfAMusicAlbum = 156

export default Joi.object({
  title: Joi.string().max(longestTitleOfAMusicAlbum),
  dateRelease: Joi.date().iso(),
  artistId: Joi.number()
})
