const express = require('express')
const graphqlHTTP = require('express-graphql');
import Schema from './schema/Schema';
const app = express()

app.set('port', process.env.PORT || 7000)

app.use('/graphql', (req, res) => {
  graphqlHTTP({
    schema: new Schema().schema,
    graphiql: true,
    rootValue: new Schema().root
   
  })(req, res)
})

const server = app.listen(app.get('port'), () => {
  console.log(`Server running -> PORT ${server.address().port}`)
})

module.exports = app
