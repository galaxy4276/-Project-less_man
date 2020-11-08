'use strict';
import Sequelize from 'sequelize';
import { development } from '../config/config';
import User from './User';
import Post from './Post';
import Image from './Image';


// const config = require(__dirname + '/../config/config.json')[env];
const config = development;
const db = {};

export const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.User = User;
db.Post = Post;
db.Image = Image;

Object.keys(db).forEach(modelName => {
  db[modelName].init(sequelize); // init만 추가
});

Object.keys(db).forEach(modelName => {
 if (db[modelName].associate) {
   db[modelName].associate(db);
 }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;


export default db;  