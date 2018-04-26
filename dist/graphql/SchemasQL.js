"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Usuario_1 = require("./../models/Usuario");
const graphql_1 = require("graphql");
const PerfilType = new graphql_1.GraphQLObjectType({
    name: 'Perfil',
    fields: {
        nome: { type: graphql_1.GraphQLString },
    }
});
const UsuarioType = new graphql_1.GraphQLObjectType({
    name: 'Usuario',
    fields: {
        nome: { type: graphql_1.GraphQLString },
        senha: { type: graphql_1.GraphQLString },
        perfil: { type: PerfilType }
    }
});
const UsuarioQueryType = new graphql_1.GraphQLObjectType({
    name: 'Query',
    fields: {
        usuarios: {
            type: new graphql_1.GraphQLList(UsuarioType),
            resolve: () => {
                return Usuario_1.UsuarioSchema.find();
            }
        }
    }
});
exports.schemasQL = new graphql_1.GraphQLSchema({ query: UsuarioQueryType });
//xport const schemasQL = makeExecutableSchema({ ContinenteQueryType })
//# sourceMappingURL=SchemasQL.js.map