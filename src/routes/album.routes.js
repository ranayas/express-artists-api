import { Router } from 'express'
import { validate } from '../middlewares/validation.handler'
import albumSchema from '../schemas/album.schema'
import * as albumControler from '../controllers/album.controller'

const router = Router()

router.post('/', validate(albumSchema), albumControler.create)

export default router
