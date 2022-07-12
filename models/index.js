const User = require('./User');
// const Project = require('./Project');
const Job = require('./Job');

// User.hasMany(Project, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE',
// });
User.hasMany(Job, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

// Project.belongsTo(User, {
//   foreignKey: 'user_id',
// });

Job.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Job };
