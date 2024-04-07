import Router from 'express'
const router = new Router()
import answerController from '../Controller/answerControllers.js'

router.post('/', answerController.create)
router.get('/', answerController.getAll)
router.get('/:id', answerController.getOne)
router.put('/update', answerController.update)
router.delete('/:id', answerController.remove)

export default router