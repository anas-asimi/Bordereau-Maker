import logger from './logger.js'

const requestLogger = (request, response, next) => {
  logger.info('--------------------------')
  logger.info('Date :', (new Date()).toISOString())
  logger.info('Method :', request.method)
  logger.info('Path :  ', request.path)
  logger.info('Body :  ', request.body)
  next()
}

export {
  requestLogger
}