const User = require('./User');
// const Project = require('./Project');
const Career = require('./Career');

// User.hasMany(Project, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE',
// });
User.hasMany(Career, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

// Project.belongsTo(User, {
//   foreignKey: 'user_id',
// });

Career.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Career };
