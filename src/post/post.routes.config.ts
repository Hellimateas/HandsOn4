import express from 'express'
import debug from 'debug'
import { CommonRoutesConfig } from '../common/common.routes.config'

const log: debug.IDebugger = debug('app:users-controller')

export class PostRoutes extends CommonRoutesConfig{
constructor(app: express.Application){
  super(app, 'PostRoutes')
}

configureRoutes(): express.Application {
    this.app.route('/post')
        .get((req: express.Request,res: express.Response) => {
          res.status(200).send(`Lista de Post`)
        })
        .post((req: express.Request, res: express.Response) => {
          res.status(200).send(`Cria post`)
        })

    this.app.route('/post/:postId')
        .get((req: express.Request,res: express.Response) => {
          res.status(200).send(`GET requested for id ${req.params.postId}`)
        })
        .put((req: express.Request,res: express.Response) => {
          res.status(200).send(`PUT requested for id ${req.params.postId}`)
        })
        .delete((req: express.Request,res: express.Response) => {
          res.status(204).send(`DELETE requested for id ${req.params.postId}`)
        })

        return this.app;
}
}
