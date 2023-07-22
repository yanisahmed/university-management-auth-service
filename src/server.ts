import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { logger, errorLogger } from './shared/logger'

async function boostrap() {
  try {
    await mongoose.connect(config.database_url as string)
    // console.log(`Database Connected`)
    logger.info(`Database Connected`)

    app.listen(config.port, () => {
      // console.log(`Example app listening on port ${config.port}`)
      logger.info(`App listening on port ${config.port}`)
    })
  } catch (err) {
    // console.log(`Database Connection Failed`, err)
    errorLogger.info(`Database Connection was Failed`, err)
  }
}

boostrap()
