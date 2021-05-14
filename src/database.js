import { Sequelize } from 'sequelize'
import * as models from './models/setup-models'
import config from './config'

const sequelize = new Sequelize(
  config.DB_DATABASE,
  config.DB_USERNAME,
  config.DB_PASSWORD,
  {
    host: config.DB_HOST,
    port: config.DB_PORT,
    dialect: config.DB_CONNECTION,
    logging: false
  }
)

const database = {
  loadModels() {
    models.definers.forEach(definer => definer(sequelize))
    return this
  },
  syncTables(syncOptions) {
    return sequelize.sync(syncOptions)
  },
  testConnection() {
    return sequelize.authenticate()
  },
  defineRelationships() {
    models.defineRelationships()
    return this
  }
}

export default database
