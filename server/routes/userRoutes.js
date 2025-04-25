import express from 'express'
import { getUserData, purchaseCourse, userEnrolledCourese } from '../controllers/userController'

const userRouter = express.Router()
userRouter.get('/data', getUserData)
userRouter.get('/enrolled-course', userEnrolledCourese)
userRouter.post('/purchase', purchaseCourse)
s
export default userRouter;