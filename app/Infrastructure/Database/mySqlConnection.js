const Sequelize = require('sequelize');
const {
  database: { mysql },
} = require('../Config');

const sequelize = new Sequelize(mysql.DB, mysql.USERNAME, mysql.PASSWORD, {
  dialect: mysql.DIALECT || 'mysql',
  host: mysql.HOST,
  port: mysql.PORT || 3306,
  pool: {
    max: 5,
    min: 1,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log(`MySQL Database ${mysql.DB} on ${mysql.HOST} connected Successfully`);
  })
  .catch((err) => {
    console.log('Connection Error Database not connected', err);
  });
sequelize.sync();

sequelize.addHook('beforeCount', function (options) {
  if (this._scope.include && this._scope.include.length > 0) {
    options.distinct = true;
    options.col = this._scope.col || options.col || `"${this.options.name.singular}".id`;
  }

  if (options.include && options.include.length > 0) {
    options.include = null;
  }
});

module.exports = sequelize;
