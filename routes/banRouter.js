import Router from 'express'
const router = new Router()
import banController from '../Controller/banControllers.js'

router.post('/', banController.create)
router.get('/', banController.getAll)
router.get('/:id', banController.getOne)
router.put('/update', banController.update)
router.delete('/:id', banController.remove)

export default router