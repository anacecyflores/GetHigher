const User = require('./User');
const Career = require('./Career');

User.hasMany(Career, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Career.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Career };
