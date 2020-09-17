import AppError from '@errors/appError'
import HttpStatusCode from '@commons/httpCode'

class UserController {
  add (a: number, b: number): number {
    if (b > a) {
      throw new AppError('B cannot be biggest from A', HttpStatusCode.BAD_REQUEST)
    }
    return (a + b)
  }
}

export default UserController
