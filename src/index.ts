import Express from 'express'
import { userRoutes } from '@app/users/index'
import { orderRoutes } from '@app/orders/index'

class App {
    private server: Express.Application;

    constructor () {
      this.server = Express()
      this.middlewares()
      this.routes()
      this.unhandledRequests()
    }

    public getApplication (): Express.Application {
      return this.server
    }

    private middlewares () {
    }

    private routes () {
      this.server.use('/users', userRoutes)
      this.server.use('/orders', orderRoutes)
    }

    private unhandledRequests () {

    }
}

export default App
