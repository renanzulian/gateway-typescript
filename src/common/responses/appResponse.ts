import HttpStatusCode from '@commons/httpCode'
import { Response } from 'express'

interface AppResponse {
    response: Response

    setPayload(payload: Object): void
    setStatus(httpStatusCode: HttpStatusCode): void
    handleError(error: Error): void
    send(): void
}

export default AppResponse
