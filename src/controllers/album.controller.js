import { StatusCodes } from 'http-status-codes'
import * as albumService from '../services/album.service'

export async function create(request, response, next) {
  const { title, dateRelease } = request.body
  try {
    const album = await albumService.create({ title, dateRelease })
    response.status(StatusCodes.CREATED).json(album)
  } catch (error) {
    next(error)
  }
}
