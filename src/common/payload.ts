import HttpStatusCode from './httpCode'

class JsonPayload {
    httpStatusCode: HttpStatusCode
    message?: String
    isError?: Boolean
    isOperational?: Boolean
    resource?: Object

    constructor (httpCode: HttpStatusCode, data: String | Object, isErrorOperational?: Boolean) {
      this.httpStatusCode = httpCode
      if (httpCode >= 400) {
        this.message = String(data)
        this.isError = isErrorOperational || true
      }
    }
}

export default JsonPayload
