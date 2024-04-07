import Router from 'express'
const router = new Router()
import tasksController from '../Controller/tasksController.js'

router.post('/', tasksController.create)
router.get('/', tasksController.getAll)
router.get('/:id', tasksController.getOne)
router.put('/update', tasksController.update)
router.delete('/:id', tasksController.remove)

export default router