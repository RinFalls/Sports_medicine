import Router from 'express'
const router = new Router()
import kursController from '../Controller/kursController.js'

router.post('/', kursController.create)
router.get('/', kursController.getAll)
router.get('/:id', kursController.getOne)
router.put('/update', kursController.update)
router.delete('/:id', kursController.remove)

export default router