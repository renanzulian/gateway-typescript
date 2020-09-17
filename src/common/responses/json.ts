import AppError from '@errors/appError'
import { Response } from 'express'
import HttpStatusCode from '../httpCode'
import AppResponse from './appResponse'

class JsonResponse implements AppResponse {
    response: Response
    httpStatusCode?: HttpStatusCode
    payload?: Object

    constructor (response: Response) {
      this.response = response
    }

    public setStatus (httpStatusCode: HttpStatusCode): void {
      this.httpStatusCode = httpStatusCode
    }

    public setPayload (payload: Object): void {
      this.payload = payload
    }

    public handleError (error: Error): void {
      if (error instanceof AppError) {
        this.httpStatusCode = error.httpCode
        this.payload = { message: error.message }
      } else {
        this.httpStatusCode = HttpStatusCode.INTERNAL_SERVER_ERROR
        this.payload = { message: error.message }
      }
    }

    public send (): void {
      this.response
        .status(this.httpStatusCode || HttpStatusCode.INTERNAL_SERVER_ERROR)
        .json(this.payload)
    }
}

export default JsonResponse
