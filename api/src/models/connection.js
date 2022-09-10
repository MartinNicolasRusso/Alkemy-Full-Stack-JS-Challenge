const User = require('./user')
const Finance = require('./finance')

User.hasMany(Finance,{foreignKey:'financeId'})
Finance.belongsTo(User,{foreignKey:'financeId'})