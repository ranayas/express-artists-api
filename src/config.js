import { config } from 'dotenv'

config()

export default Object.freeze({
  APP_PORT: process.env.APP_PORT || '3000',
  DB_HOST: process.env.DB_HOST || '127.0.0.1',
  DB_PORT: process.env.DB_PORT || '5432',
  DB_DATABASE: process.env.DB_DATABASE || 'private',
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_CONNECTION: process.env.DB_CONNECTION,
  isDevelopment: process.env.NODE_ENV !== 'production'
})
