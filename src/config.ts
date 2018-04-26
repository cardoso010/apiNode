import { schemasQL } from './graphql/SchemasQL';
import { UsuarioController } from './controllers/UsuarioController';
import * as express from 'express';
import { useExpressServer, Authorized } from "routing-controllers";
import * as bodyParser from 'body-parser';
import * as path from 'path';
import * as cors from 'cors';
import * as graphqlHTTP from 'express-graphql';
import * as mongoose from 'mongoose';
import { resolve } from 'path';

export class ExpressConfig {

    app : express.Application;
    conexao : any;

    constructor(){
        this.app = express();
        this.app.use(bodyParser.json());
        this.app.use(cors());
        this.app.use(bodyParser.urlencoded({extended:false}));
        this.app.use('/graphql', graphqlHTTP({schema: schemasQL ,graphiql: true}));
        this.conexao = mongoose.connect("mongodb://localhost/apiNode")
        this.conexao.then(() => console.log(`
            Banco Conectado : $

            Controllers : 
            
            ***********`
        )).catch(()=> {console.log('Não foi possivel conecatr ao banco')});
        this.configServer();
    }

    configServer(){
        useExpressServer(this.app, {
            routePrefix: `/api`,
            defaultErrorHandler: false,
            classTransformer: false,
            cors: true,    
            controllers: [`${resolve('dist', 'controllers')}/*{.js,.ts}`],
            middlewares: [null]
        });
    }

}