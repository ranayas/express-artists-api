import { Router } from 'express'
import * as artistController from '../controllers/artist.controller'
import { validate } from '../middlewares/validation.handler'
import nameSchema from '../schemas/name.schema'

const router = Router()

router.post('/', validate(nameSchema), artistController.create)

export default router
