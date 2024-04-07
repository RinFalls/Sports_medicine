import Router from 'express'
const router = new Router()
import olimpiadeController from '../Controller/olimpiadeController.js'

router.post('/', olimpiadeController.create)
router.get('/', olimpiadeController.getAll)
router.get('/:id', olimpiadeController.getOne)
router.put('/update', olimpiadeController.update)
router.delete('/:id', olimpiadeController.remove)

export default router