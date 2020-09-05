'use strict';
import path from 'path';
import Sequelize from 'sequelize';
import { development } from './config';


// const config = require(__dirname + '/../config/config.json')[env];
const config = development;
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);
  
db.sequelize = sequelize;
db.Sequelize = Sequelize;


export default db;  
  
  // Object.keys(db).forEach(modelName => {
  //   if (db[modelName].associate) {
  //     db[modelName].associate(db);
  //   }
  // });