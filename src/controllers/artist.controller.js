import { StatusCodes } from 'http-status-codes'
import * as artistService from '../services/artist.service'

export async function create(request, response, next) {
  try {
    const { name } = request.body
    const user = await artistService.create(name)
    response.status(StatusCodes.CREATED).json(user)
  } catch (error) {
    next(error)
  }
}

export async function get(request, response, next) {
  try {
    const user = await artistService.get(request.params.id)
    response.status(StatusCodes.CREATED).json(user)
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
