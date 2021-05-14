import { DataTypes, Model } from 'sequelize'

export class Album extends Model {}

export const definer = sequelize => {
  Album.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      dateRelease: {
        type: DataTypes.DATE,
        allowNull: false
      }
    },
    { sequelize }
  )
}
