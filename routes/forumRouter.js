import Router from 'express'
const router = new Router()
import forumController from '../Controller/forumController.js'

router.post('/', forumController.create)
router.get('/', forumController.getAll)
router.get('/:id', forumController.getOne)
router.put('/update', forumController.update)
router.delete('/:id', forumController.remove)

export default router