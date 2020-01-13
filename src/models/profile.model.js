import { mainSchema } from '../config/constants';

export default (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile',
    {
      id: {
        field: 'id_profile',
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      profile: {
        field: 'nm_profile',
        type: DataTypes.STRING(40),
        allowNull: false,
      }
    },
    {
      schema: mainSchema,
      tableName: 'tb_profile',
    }
  );

  return Profile;
}