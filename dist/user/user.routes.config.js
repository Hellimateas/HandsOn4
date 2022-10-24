"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRoutes = void 0;
const debug_1 = __importDefault(require("debug"));
const common_routes_config_1 = require("../common/common.routes.config");
const log = (0, debug_1.default)('app:users-controller');
class UsersRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'UsersRoutes');
    }
    configureRoutes() {
        this.app.route('/users')
            .get((req, res) => {
            res.status(200).send(`Lista de Usuários`);
        })
            .post((req, res) => {
            res.status(200).send(`Cria usuário`);
        });
        this.app.route('/users/:usersId')
            .get((req, res) => {
            res.status(200).send(`GET requested for id ${req.params.usersId}`);
        })
            .put((req, res) => {
            res.status(200).send(`PUT requested for id ${req.params.usersId}`);
        })
            .delete((req, res) => {
            res.status(204).send(`DELETE requested for id ${req.params.usersId}`);
        });
        return this.app;
    }
}
exports.UsersRoutes = UsersRoutes;
