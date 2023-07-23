import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors'
import usersRouter from './app/modules/users/users.route'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application Routes
// http://localhost:5000/api/v1/users/create-user
app.use('/api/v1/users', usersRouter)

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  // res.send('Working Successfully')
  // throw new Error('Oops! Something you did not try')
  // throw new ApiError(400, 'Ore Babare')
  next('Ore Baba Error')
})

// Global Error Handler
app.use(globalErrorHandler)

export default app
