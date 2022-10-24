"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientsRoutes = void 0;
const debug_1 = __importDefault(require("debug"));
const common_routes_config_1 = require("../common/common.routes.config");
const log = (0, debug_1.default)('app:users-controller');
class ClientsRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'ClientsRoutes');
    }
    configureRoutes() {
        this.app.route('/clients')
            .get((req, res) => {
            res.status(200).send(`Lista de clientes`);
        })
            .post((req, res) => {
            res.status(200).send(`Cria cliente`);
        });
        this.app.route('/clients/:clientId')
            .get((req, res) => {
            res.status(200).send(`GET requested for id ${req.params.clientId}`);
        })
            .put((req, res) => {
            res.status(200).send(`PUT requested for id ${req.params.clientId}`);
        })
            .delete((req, res) => {
            res.status(204).send(`DELETE requested for id ${req.params.clientId}`);
        });
        return this.app;
    }
}
exports.ClientsRoutes = ClientsRoutes;
