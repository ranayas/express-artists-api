import express from 'express'
import config from './config'
import morgan from 'morgan'
import artistRoutes from './routes/artist.routes'
import { Database } from './database'

const server = express()

async function main() {
  const database = new Database(
    {
      database: config.DB_DATABASE,
      connection: config.DB_CONNECTION,
      host: config.DB_HOST,
      password: config.DB_PASSWORD,
      port: config.DB_PORT,
      username: config.DB_USERNAME
    },
    { logging: false }
  )

  try {
    await database.testConnection()
    await database.loadModels().defineRelationships().syncTables()
  } catch (error) {
    console.error(`Unable to connect to the database. ${error}`)
  }

  server.use(morgan('dev'))
  server.use(express.json())

  server.listen(config.APP_PORT, () => {
    console.log(`Listen on port: ${config.APP_PORT}`)
  })

  server.use('/artists', artistRoutes)
}

main()
