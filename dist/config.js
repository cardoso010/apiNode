"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SchemasQL_1 = require("./graphql/SchemasQL");
const express = require("express");
const routing_controllers_1 = require("routing-controllers");
const bodyParser = require("body-parser");
const cors = require("cors");
const graphqlHTTP = require("express-graphql");
const mongoose = require("mongoose");
const path_1 = require("path");
class ExpressConfig {
    constructor() {
        this.app = express();
        this.app.use(bodyParser.json());
        this.app.use(cors());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use('/graphql', graphqlHTTP({ schema: SchemasQL_1.schemasQL, graphiql: true }));
        this.conexao = mongoose.connect("mongodb://localhost/apiNode");
        this.conexao.then(() => console.log(`
            Banco Conectado : $

            Controllers : 
            
            ***********`)).catch(() => { console.log('Não foi possivel conecatr ao banco'); });
        this.configServer();
    }
    configServer() {
        routing_controllers_1.useExpressServer(this.app, {
            routePrefix: `/api`,
            defaultErrorHandler: false,
            classTransformer: false,
            cors: true,
            controllers: [`${path_1.resolve('dist', 'controllers')}/*{.js,.ts}`],
            middlewares: [null]
        });
    }
}
exports.ExpressConfig = ExpressConfig;
//# sourceMappingURL=config.js.map