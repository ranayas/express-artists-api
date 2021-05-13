import Boom from 'boom'
import config from '../config'

export class ErrorHandler {
  static log(error, request, response, next) {
    console.error(error)
    next(error)
  }

  static wrapErrors(error, request, response, next) {
    if (!error.isBoom) {
      return next(Boom.badImplementation(error))
    }
    return next(error)
  }

  static #withErrorStack(payload, stack) {
    return config.isDevelopment ? { ...payload, stack } : payload
  }

  // eslint-disable-next-line
  static handle(error, request, response, next) {
    const { payload, statusCode } = error.output
    response
      .status(statusCode)
      .json({ error: ErrorHandler.#withErrorStack(payload, error.stack) })
  }
}
