import { DataTypes, Model } from 'sequelize'

export class Artist extends Model {}

export const definer = sequelize => {
  Artist.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    { sequelize }
  )
}
