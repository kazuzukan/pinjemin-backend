'use strict';
module.exports = (sequelize, DataTypes) => {
  const loan = sequelize.define('loan', {
    name: DataTypes.STRING,
    address: DataTypes.TEXT,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    point: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {});
  loan.associate = function(models) {
    // associations can be defined here
    loan.belongsTo(models.users, {as: 'loansToUser', foreignKey: 'ownersUserId', targetKey: 'id'})
    loan.belongsTo(models.users, {as: 'loansFromUser', foreignKey: 'loanersUserId', targetKey: 'id'})
    loan.belongsTo(models.product)
  };
  return loan;
};