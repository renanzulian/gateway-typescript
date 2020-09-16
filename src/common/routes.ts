import { Router } from 'express'

abstract class Routes {
    protected routes: Router

    constructor () {
      this.routes = Router()
      this.loadResources()
    }

    public getRoutes (): Router {
      return this.routes
    }

    protected loadResources ():void {}
}

export default Routes
