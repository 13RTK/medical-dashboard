import { Sequelize } from 'sequelize-typescript';

const database = 'database';
const username = 'zlhis';
const password = 'HIS';

const host = '192.168.1.199';
const port = 1521;
const dialect = 'oracle';

const sequelize = new Sequelize(database, username, password, {
  host,
  port,
  dialect,
});

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
