import mongoose from 'mongoose'

const VanguardCardSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    cardType: { type: String },
    group: { type: String },
    race: { type: String },
    nation: { type: String },
    grade: { type: Number },
    power: { type: Number },
    critical: { type: Number },
    skill: { type: String },
    gift: { type: String },
    effect: { type: String },
    flavor: { type: String },
    regulation: { type: String },
    number: { type: Number },
    rarity: { type: String },
    illustrator: { type: String },
    image: { type: String },
  },
  {
    collection: 'VanguardCards',
  }
)

let VanguardCard

try {
  VanguardCard = mongoose.model('VanguardCard')
} catch (error) {
  VanguardCard = mongoose.model('VanguardCard', VanguardCardSchema)
}

export default VanguardCard
