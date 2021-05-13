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
