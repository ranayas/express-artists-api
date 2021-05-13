import Boom from 'boom'
import config from '../config'

export class ErrorHandler {
  static log(error, request, response, next) {
    console.error(error)
    next(error)
  }

  static wrapErrors(error, request, response, next) {
    !error.isBoom ? next(Boom.badImplementation(error)) : next(error)
  }

  static #withErrorStack(payload, stack) {
    return config.isDevelopment ? { ...payload, stack } : payload
  }

  static wrapJoiErrors(error, request, response, next) {
    if (error.isJoi) {
      const messages = error.details.map(detail => detail.message)
      error.output.payload.message = messages
      return next(error)
    }
    return next(error)
  }

  // eslint-disable-next-line
  static handle(error, request, response, next) {
    const { payload, statusCode } = error.output
    response
      .status(statusCode)
      .json({ error: ErrorHandler.#withErrorStack(payload, error.stack) })
  }
}
