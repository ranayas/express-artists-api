import { Router } from 'express'
import { validate } from '../middlewares/validation.handler'
import nameSchema from '../schemas/name.schema'
import * as genreController from '../controllers/genre.controller'

const router = Router()

router.post('/', validate(nameSchema), genreController.create)
router.get('/', genreController.getAll)

export default router
