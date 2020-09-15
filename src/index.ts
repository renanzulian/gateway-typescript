import Express from 'express'

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
      this.server.use('/', (req, res) => {
        res.json(req.headers)
      })
    }

    private unhandledRequests () {

    }
}

export default App
