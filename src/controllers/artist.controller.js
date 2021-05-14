import { StatusCodes } from 'http-status-codes'
import * as artistService from '../services/artist.service'

export async function create(request, response, next) {
  try {
    const user = await artistService.create(request.body.name)
    response.status(StatusCodes.CREATED).json(user)
  } catch (error) {
    next(error)
  }
}

export async function get(request, response, next) {
  try {
    const user = await artistService.get(request.params.id)
    response.status(StatusCodes.OK).json(user)
  } catch (error) {
    next(error)
  }
}

export async function getAll(request, response, next) {
  try {
    const users = await artistService.getAll()
    response.status(StatusCodes.OK).json(users)
  } catch (error) {
    next(error)
  }
}

export async function update(request, response, next) {
  const { id, name } = request.body
  try {
    const user = await artistService.update({ id, name })
    response.status(StatusCodes.OK).json(user)
  } catch (error) {
    next(error)
  }
}

export async function remove(request, response, next) {
  try {
    const user = await artistService.remove(request.params.id)
    response.status(StatusCodes.NO_CONTENT).json(user)
  } catch (error) {
    next(error)
  }
}
