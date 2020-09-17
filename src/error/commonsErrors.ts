import HttpStatusCode from '@commons/httpCode'
import AppError from './appError'

class EnvironmentVariableMissing extends AppError {
  constructor (variableMissing?: string) {
    const solution = 'Check the session about environment variables required on documentation.'
    const message = variableMissing
      ? `${variableMissing} is missing. ${solution}`
      : `Environment variable missing. ${solution}`
    super(message, HttpStatusCode.INTERNAL_SERVER_ERROR)
  }
}

class MetadataMissing extends AppError {
  constructor (dataMissing?: string) {
    const solution = 'Check the endpoint documentation.'
    const message = dataMissing
      ? `${dataMissing} is missing. ${solution}`
      : `Some metadata is missing. ${solution}`
    super(message, HttpStatusCode.BAD_REQUEST)
  }
}

class ResourceNotImplemented extends AppError {
  constructor (path: string) {
    const solution = 'Get support with developers.'
    const message = `The ${path} was not developed yet. ${solution}`
    super(message, HttpStatusCode.NOT_IMPLEMENTED)
  }
}

export { EnvironmentVariableMissing, MetadataMissing, ResourceNotImplemented }
