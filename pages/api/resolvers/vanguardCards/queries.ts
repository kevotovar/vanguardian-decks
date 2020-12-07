import VanguardCard from '../../db/models/VanguardCard'

async function getVanguardCards() {
  try {
    const response = await VanguardCard.find({})
    console.log(response)
    return response
  } catch (error) {
    throw new Error(error)
  }
}

export default {
  getVanguardCards,
}
