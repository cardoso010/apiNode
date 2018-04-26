import { UsuarioSchema } from './../models/Usuario';
import { GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLSchema, GraphQLList } from "graphql";
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';

const PerfilType = new GraphQLObjectType({
  name: 'Perfil',
  fields: {
      nome: { type: GraphQLString },
  }
});

const UsuarioType = new GraphQLObjectType({
    name: 'Usuario',
    fields: {
        nome: { type: GraphQLString },
        senha: { type: GraphQLString },
        perfil: {type: PerfilType}
    }
});

const UsuarioQueryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
      usuarios: {
        type:  new GraphQLList(UsuarioType),
        resolve: () => {
          return UsuarioSchema.find();
        }
      }
    }
});

  
export const schemasQL = new GraphQLSchema({query: UsuarioQueryType });
//xport const schemasQL = makeExecutableSchema({ ContinenteQueryType })