import mongoose from 'mongoose'

export default async function initDB() {
  try {
    return await mongoose.connect(
      `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOSTNAME}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        authSource: 'admin',
      }
    )
  } catch (error) {
    throw new Error(error)
  }
}
