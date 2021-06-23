const knex = require('knex');
const databaseConfig = require('./knexfile')[process.env.NODE_ENV || 'development'];
const database = knex(databaseConfig);

module.exports = database;