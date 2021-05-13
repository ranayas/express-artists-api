import { Router } from 'express'
import * as artistController from '../controllers/artist.controller'

const router = Router()

router.post('/', artistController.create)

export default router
