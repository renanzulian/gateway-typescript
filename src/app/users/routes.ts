import Routes from '@commons/routes'

class UserRoutes extends Routes {
  protected loadResources ():void {
    this.routes.get('/', (req, res) => {
      res.sendStatus(200)
    })
  }
}

export default UserRoutes
