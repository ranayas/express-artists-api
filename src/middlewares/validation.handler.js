import Boom from 'boom'

export function validate(schema, place = 'body') {
  return async function (request, _, next) {
    try {
      const validSchema = await schema.validateAsync(request[place], {
        abortEarly: false
      })
      request[place] = validSchema
      next()
    } catch (error) {
      next(Boom.badRequest(error))
    }
  }
}
