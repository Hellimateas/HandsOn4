import express from 'express'
import debug from 'debug'
import { CommonRoutesConfig } from '../common/common.routes.config'

const log: debug.IDebugger = debug('app:users-controller')

export class UsersRoutes extends CommonRoutesConfig{
constructor(app: express.Application){
  super(app, 'UsersRoutes')
}

configureRoutes(): express.Application {
    this.app.route('/users')
        .get((req: express.Request,res: express.Response) => {
          res.status(200).send(`Lista de Usuários`)
        })
        .post((req: express.Request, res: express.Response) => {
          res.status(200).send(`Cria usuário`)
        })

    this.app.route('/users/:usersId')
        .get((req: express.Request,res: express.Response) => {
          res.status(200).send(`GET requested for id ${req.params.usersId}`)
        })
        .put((req: express.Request,res: express.Response) => {
          res.status(200).send(`PUT requested for id ${req.params.usersId}`)
        })
        .delete((req: express.Request,res: express.Response) => {
          res.status(204).send(`DELETE requested for id ${req.params.usersId}`)
        })

        return this.app;
}
}
