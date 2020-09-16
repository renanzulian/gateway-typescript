import Express from 'express'
import { userRoutes } from '@app/users/index'
import { orderRoutes } from '@app/orders/index'
import HttpStatusCode from '@commons/httpCode'

class App {
    private liveCheck = { name: 'App is live!', status: 'UP' }
    private readyCheck = { name: 'App is ready!', status: 'UP' }
    private server: Express.Application;

    constructor () {
      this.server = Express()
      this.commonMiddlewares()
      this.routes()
      this.healthCheck()
      this.unhandledRequests()
    }

    public getApplication (): Express.Application {
      return this.server
    }

    private commonMiddlewares () {
    }

    private routes () {
      this.server.use('/users', userRoutes)
      this.server.use('/orders', orderRoutes)
    }

    private healthCheck () {
      this.server.get('/health', (req, res) => {
        res.json({ status: 'UP', checks: [this.liveCheck, this.readyCheck] })
      })

      this.server.get('/health/live', (req, res) => {
        res.json(this.liveCheck)
      })

      this.server.get('/health/ready', (req, res) => {
        res.json(this.readyCheck)
      })
    }

    private unhandledRequests () {
      this.server.use('*', (req, res) => {
        res.sendStatus(HttpStatusCode.NOT_FOUND)
      })
    }
}

export default App
