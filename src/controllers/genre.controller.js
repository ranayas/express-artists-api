import { StatusCodes } from 'http-status-codes'
import * as genreService from '../services/genre.service'

export async function create(request, response, next) {
  try {
    const user = await genreService.create(request.body.name)
    response.status(StatusCodes.CREATED).json(user)
  } catch (error) {
    next(error)
  }
}

export async function getAll(_, response, next) {
  try {
    const users = await genreService.getAll()
    response.status(StatusCodes.OK).json(users)
  } catch (error) {
    next(error)
  }
}
