import { Router } from 'express'
import { index, remove, store, update } from '../controllers/usuarios.controller.js'

const router = Router()

router.get('/', index)
router.delete('/:id', remove)
router.post('/', store)
router.put('/:id', update)

export default router
