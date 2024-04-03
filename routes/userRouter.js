import Router from 'express';
const router = new Router();
import UserController from '../Controller/userControllers.js';

import authMiddleware from '../middleware/authMiddleware.js'

router.get('/auth', authMiddleware, UserController.check)
router.post('/registration', UserController.create)
router.post('/login', UserController.login)
router.get('/:id', UserController.getOne)
router.put('/update', UserController.update)
router.delete('/:id', UserController.remove)

export default router