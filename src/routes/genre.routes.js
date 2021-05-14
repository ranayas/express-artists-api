import { Router } from 'express'
import { validate } from '../middlewares/validation.handler'
import nameSchema from '../schemas/name.schema'
import idSchema from '../schemas/id.schema'
import * as genreController from '../controllers/genre.controller'
import updateSchema from '../schemas/update.schema'

const router = Router()

router.post('/', validate(nameSchema), genreController.create)
router.get('/', genreController.getAll)
router.get('/:id', validate(idSchema, 'params'), genreController.get)
router.put('/', validate(updateSchema), genreController.update)
router.delete('/:id', validate(idSchema, 'params'), genreController.remove)

export default router
