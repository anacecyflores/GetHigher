const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Career extends Model {}

Career.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    employer: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    location_city: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    location_state: {
      type: DataTypes.STRING,
    },
    publishing_site: {
      type: DataTypes.STRING,
    },
    apply_link: {
      type: DataTypes.STRING,
    },
    job_latitude: {
      type: DataTypes.DECIMAL(10, 6),
    },
    job_longitude: {
      type: DataTypes.DECIMAL(10, 6),
    },
    description: {
      type: DataTypes.TEXT,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Career',
  }
);

module.exports = Career;
