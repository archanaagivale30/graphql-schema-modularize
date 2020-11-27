const express = require('express')
const graphqlHTTP = require('express-graphql')
var { buildSchema } = require('graphql');
import * as Designation from './schema/Designation';
import * as Employee from './schema/Employee';


const app = express()

app.set('port', process.env.PORT || 7000)

const types=[];
const queries=[];
const mutations=[];
const inputs=[];
const roots=[];

const schemas=[Designation,Employee];

schemas.forEach(s=>{
    types.push(s.types);
    queries.push(s.queries)
    mutations.push(s.mutations)
    inputs.push(s.inputs)
    roots.push(s.roots);
})
const schema = buildSchema(`
            ${inputs.join("\n")}     
         type Query {
            ${queries.join("\n")}
         },
         type Mutation {
            ${mutations.join("\n")}
          }
          ${types.join("\n")}     
     `);
const root=Object.assign({},...roots)

app.use('/graphql', (req, res) => {
  graphqlHTTP({
    schema: schema,
    graphiql: true,
    rootValue: root
   
  })(req, res)
})

const server = app.listen(app.get('port'), () => {
  console.log(`Server running -> PORT ${server.address().port}`)
})

module.exports = app
