import Router from 'express'
const router = new Router()
import kursController from '../Controller/kursController.js'

router.post('/', kursController.create)
router.get('/', kursController.getAll)
router.get('/:id', kursController.getOne)


export default router