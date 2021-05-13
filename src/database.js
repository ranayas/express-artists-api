import { Sequelize } from 'sequelize'
import * as models from './models/setup-models'

export class Database {
  #sequelize

  constructor(
    { connection, username, password, host, port, database },
    options = { logging: true }
  ) {
    this.#sequelize = new Sequelize(
      `${connection}://${username}:${password}@${host}:${port}/${database}`,
      options
    )
  }

  loadModels() {
    models.definers.forEach(definer => definer(this.#sequelize))
    return this
  }

  syncTables(syncOptions) {
    return this.#sequelize.sync(syncOptions)
  }

  defineRelationships() {
    models.defineRelationships()
    return this
  }

  testConnection() {
    return this.#sequelize.authenticate()
  }
}
