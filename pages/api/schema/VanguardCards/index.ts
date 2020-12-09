import { schemaComposer } from 'graphql-compose'
import { composeMongoose } from 'graphql-compose-mongoose'

import VanguardCard from '../../db/models/VanguardCard'

let VanguardCardTC

try {
  VanguardCardTC = composeMongoose(VanguardCard)
} catch (error) {
  VanguardCardTC = schemaComposer.getOTC('VanguardCard')
}

export const Query = {
  cardPagination: VanguardCardTC.mongooseResolvers.pagination(),
  getCardById: VanguardCardTC.mongooseResolvers.findById(),
}
