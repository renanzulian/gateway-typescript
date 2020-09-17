import HttpStatusCode from '@commons/httpCode'
import JsonResponse from '@commons/responses/json'
import Routes from '@commons/routes'
import AppError from '@errors/appError'
import UserController from './controllers'

class UserRoutes extends Routes {
  userController: UserController
  constructor () {
    super()
    this.userController = new UserController()
  }

  protected loadResources ():void {
    this.routes.get('/', (req, res) => {
      const responseHandler = new JsonResponse(res)
      try {
        if (req.query.a || req.query.b) {
          this.userController.add(Number(req.query.a), Number(req.query.b))
        } else {
          throw new AppError('A and B should be inputted', HttpStatusCode.BAD_GATEWAY)
        }
        responseHandler.setStatus(HttpStatusCode.OK)
      } catch (error) {
        responseHandler.handleError(error)
      } finally {
        responseHandler.send()
      }
    })
  }
}

export default UserRoutes
