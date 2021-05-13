import { Router } from 'express'
import * as artistController from '../controllers/artist.controller'
import { validate } from '../middlewares/validation.handler'
import nameSchema from '../schemas/name.schema'
import idSchema from '../schemas/id.schema'

const router = Router()

router.post('/', validate(nameSchema), artistController.create)
router.get('/', artistController.getAll)
router.get('/:id', validate(idSchema, 'params'), artistController.get)

export default router
