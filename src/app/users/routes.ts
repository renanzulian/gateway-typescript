import AppError from '@commons/errors'
import HttpStatusCode from '@commons/httpCode'
import Routes from '@commons/routes'

class UserRoutes extends Routes {
  protected loadResources ():void {
    this.routes.get('/', (req, res) => {
      try {
        funfun()
      } catch (error) {
        if (error instanceof AppError) {
          res.status(error.httpCode).send(error instanceof Error)
        }
        res.sendStatus(500)
      }
      res.sendStatus(200)
    })
  }
}

const funfun = () => {
  throw new AppError('Ops', HttpStatusCode.BAD_GATEWAY)
}

export default UserRoutes
