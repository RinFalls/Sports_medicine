import Router from 'express'
const router = new Router()
import userRouter from './userRouter.js'
import kursRouter from './kursRouter.js'
import olimpiadeRouter from './olimpiadeRouter.js'
import tasksRouter from './tasksRouter.js'

router.use('/user', userRouter)
router.use('/kurs', kursRouter)
router.use('/olimp', olimpiadeRouter)
router.use('/tasks', tasksRouter)
export default router