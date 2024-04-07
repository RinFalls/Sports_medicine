import Router from 'express'
const router = new Router()
import userRouter from './userRouter.js'
import kursRouter from './kursRouter.js'
import olimpiadeRouter from './olimpiadeRouter.js'
import tasksRouter from './tasksRouter.js'

import answerRouter from './answerRouter.js'
import banRouter from './banRouter.js'
import forumRouter from './forumRouter.js'

router.use('/user', userRouter)
router.use('/kurs', kursRouter)
router.use('/olimp', olimpiadeRouter)
router.use('/tasks', tasksRouter)
router.use('/ban', banRouter)
router.use('/forum', forumRouter)
router.use('/answer', answerRouter)
export default router