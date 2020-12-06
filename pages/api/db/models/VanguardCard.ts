import mongoose from 'mongoose'

const VanguardCardSchema = new mongoose.Schema({
  name: { type: String, required: true },
})

const VanguardCard = mongoose.model('VanguardCard', VanguardCardSchema)

export default VanguardCard
