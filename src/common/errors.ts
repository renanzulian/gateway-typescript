import HttpStatusCode from './httpCode'

class AppError extends Error {
    public readonly httpCode: HttpStatusCode;
    public readonly description : String;

    constructor (message: string, httpCode?: HttpStatusCode) {
      super(message)

      Object.setPrototypeOf(this, new.target.prototype) // restore prototype chain

      this.description = message
      this.httpCode = httpCode || 500
      Error.captureStackTrace(this)
    }
}

export default AppError
