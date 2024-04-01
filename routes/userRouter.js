import Router from 'express';
const router = new Router();
import UserController from '../Controller/userControllers.js';

// import authMiddleware from '../middleware/authMiddleware.js'

router.post('/registration', UserController.create)
router.post('/login', UserController.login)
router.get('/', UserController.aboba)
// router.get('/auth', authMiddleware, UserController.check)
export default router