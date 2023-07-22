import { createLogger, format, transports } from 'winston'
import path from 'path'
const { combine, timestamp, label, printf } = format

const myFormat = printf(({ level, message, label, timestamp }) => {
  const date = new Date(timestamp)
  const hour = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()

  return `${date.toDateString()} : ${hour} : ${minutes}: ${seconds} [${label}] ${level} ${message}`
})

const logger = createLogger({
  level: 'info',
  format: combine(label({ label: 'PH' }), timestamp(), myFormat),
  transports: [
    new transports.Console(),
    new transports.File({
      filename: path.join(process.cwd(), 'log', 'winston', 'success.log'),
      level: 'info',
    }),
  ],
})

const errorLogger = createLogger({
  level: 'info',
  format: combine(label({ label: 'PH' }), timestamp(), myFormat),
  transports: [
    new transports.Console(),
    new transports.File({
      filename: path.join(process.cwd(), 'log', 'winston', 'error.log'),
      level: 'error',
    }),
  ],
})

export { logger, errorLogger }
