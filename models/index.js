const User = require('./User');
const Project = require('./Project');
const Jobs = require('./Jobs');

User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Project.belongsTo(User, {
  foreignKey: 'user_id',
});

Jobs.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Project, Jobs };
