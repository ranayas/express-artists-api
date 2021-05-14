import { StatusCodes } from 'http-status-codes'
import * as artistService from '../services/artist.service'

export async function create(request, response, next) {
  try {
    const artist = await artistService.create(request.body.name)
    response.status(StatusCodes.CREATED).json(artist)
  } catch (error) {
    next(error)
  }
}

export async function get(request, response, next) {
  try {
    const artist = await artistService.get(request.params.id)
    response.status(StatusCodes.OK).json(artist)
  } catch (error) {
    next(error)
  }
}

export async function getAll(request, response, next) {
  try {
    const artists = await artistService.getAll()
    response.status(StatusCodes.OK).json(artists)
  } catch (error) {
    next(error)
  }
}

export async function update(request, response, next) {
  const { id, name } = request.body
  try {
    const artist = await artistService.update({ id, name })
    response.status(StatusCodes.OK).json(artist)
  } catch (error) {
    next(error)
  }
}

export async function remove(request, response, next) {
  try {
    await artistService.remove(request.params.id)
    response.status(StatusCodes.NO_CONTENT).json()
  } catch (error) {
    next(error)
  }
}
