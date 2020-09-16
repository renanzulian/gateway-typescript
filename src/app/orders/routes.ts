import Routes from '@commons/routes'

class OrdersRoutes extends Routes {
  protected loadResources ():void {
    this.routes.get('/', (req, res) => {
      res.sendStatus(201)
    })
  }
}

export default OrdersRoutes
