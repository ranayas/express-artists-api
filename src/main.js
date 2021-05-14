import express from 'express'
import config from './config'
import morgan from 'morgan'
import artistRoutes from './routes/artist.routes'
import genreRoutes from './routes/genre.routes'
import database from './database'
import { ErrorHandler } from './middlewares/error.handler'

const server = express()

async function main() {
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
  server.use('/genres', genreRoutes)

  server.use(ErrorHandler.log)
  server.use(ErrorHandler.wrapJoiErrors)
  server.use(ErrorHandler.wrapErrors)
  server.use(ErrorHandler.handle)
}

main()
