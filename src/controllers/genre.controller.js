import { StatusCodes } from 'http-status-codes'
import * as genreService from '../services/genre.service'

export async function create(request, response, next) {
  try {
    const genre = await genreService.create(request.body.name)
    response.status(StatusCodes.CREATED).json(genre)
  } catch (error) {
    next(error)
  }
}

export async function getAll(_, response, next) {
  try {
    const genres = await genreService.getAll()
    response.status(StatusCodes.OK).json(genres)
  } catch (error) {
    next(error)
  }
}

export async function get(request, response, next) {
  try {
    const genre = await genreService.get(request.params.id)
    response.status(StatusCodes.OK).json(genre)
  } catch (error) {
    next(error)
  }
}

export async function update(request, response, next) {
  const { id, name } = request.body
  try {
    const genre = await genreService.update({ id, name })
    response.status(StatusCodes.OK).json(genre)
  } catch (error) {
    next(error)
  }
}

export async function remove(request, response, next) {
  try {
    await genreService.remove(request.params.id)
    response.status(StatusCodes.NO_CONTENT).json()
  } catch (error) {
    next(error)
  }
}
