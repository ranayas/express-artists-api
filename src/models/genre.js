import { DataTypes, Model } from 'sequelize'

export class Genre extends Model {}

export const definer = sequelize => {
  Genre.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    { sequelize }
  )
}
