"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostRoutes = void 0;
const debug_1 = __importDefault(require("debug"));
const common_routes_config_1 = require("../common/common.routes.config");
const log = (0, debug_1.default)('app:users-controller');
class PostRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'PostRoutes');
    }
    configureRoutes() {
        this.app.route('/post')
            .get((req, res) => {
            res.status(200).send(`Lista de Post`);
        })
            .post((req, res) => {
            res.status(200).send(`Cria post`);
        });
        this.app.route('/post/:postId')
            .get((req, res) => {
            res.status(200).send(`GET requested for id ${req.params.postId}`);
        })
            .put((req, res) => {
            res.status(200).send(`PUT requested for id ${req.params.postId}`);
        })
            .delete((req, res) => {
            res.status(204).send(`DELETE requested for id ${req.params.postId}`);
        });
        return this.app;
    }
}
exports.PostRoutes = PostRoutes;
