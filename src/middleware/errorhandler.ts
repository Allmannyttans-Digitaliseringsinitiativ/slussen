import { NextFunction, Request, Response } from 'express'
import logger from '@app/helpers/logger'

/**
 * Redacts possibly sensitive information from errors before they are logged.
 * @param error
 */
const redact = (error: any) => {
  delete error.request
  delete error.config
  delete error.isAxiosError
  delete error.toJSON

  if (error.response) {
    delete error.response.request

    if (error.response.config) {
      const redactables = [
        'adapter',
        'data',
        'headers',
        'maxContentLength',
        'timeout',
        'transformRequest',
        'transformResponse',
        'validateStatus',
        'xsrfCookieName',
        'xsrfHeaderName',
      ]
      redactables.map((prop) => delete error.response.config[prop])

      if (error.response.config.url.includes('login')) {
        error.response.config.url = 'login?***redacted**'
      }
    }
  }

  return error
}

const errorMiddleware = (error: any, request: Request, response: Response, next: NextFunction) => {
  //TODO: Send error to logging service of choice.
  logger.error(redact(error))

  const status = error.status || (error.response ? error.response.status : 500)
  let message = error.message || (error.response?.data?.message)
  message = message ? message : 'Something went wrong'
  response.status(status).send({
    status,
    message,
  })
  next()
}

export default errorMiddleware
