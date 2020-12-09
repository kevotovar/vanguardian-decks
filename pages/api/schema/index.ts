import { schemaComposer } from 'graphql-compose'
import * as vanguardCardsResolvers from './VanguardCards'

schemaComposer.Query.addFields({
  ...vanguardCardsResolvers.Query,
})

const graphqlSchema = schemaComposer.buildSchema()
export default graphqlSchema
