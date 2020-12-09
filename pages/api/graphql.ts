import { ApolloServer } from 'apollo-server-micro'
import initDB from './db/init'
import schema from './schema'

initDB()

const apolloServer = new ApolloServer({ schema })

export const config = {
  api: {
    bodyParser: false,
  },
}

export default apolloServer.createHandler({ path: '/api/graphql' })
