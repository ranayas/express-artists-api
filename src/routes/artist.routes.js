import { Router } from 'express'
import * as artistController from '../controllers/artist.controller'
import { validate } from '../middlewares/validation.handler'
import nameSchema from '../schemas/name.schema'
import idSchema from '../schemas/id.schema'
import updateSchema from '../schemas/update.schema'

const router = Router()

router.post('/', validate(nameSchema), artistController.create)
router.get('/', artistController.getAll)
router.get('/:id', validate(idSchema, 'params'), artistController.get)
router.put('/', validate(updateSchema), artistController.update)
router.delete('/:id', validate(idSchema, 'params'), artistController.remove)

export default router
