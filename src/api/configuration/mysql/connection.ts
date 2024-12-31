import dotenv from 'dotenv';
import fs from 'fs';
import yaml from 'js-yaml';
import path from 'path';
import { Sequelize } from 'sequelize';

dotenv.config();

const env = process.env.NODE_ENV || 'dev';

const isDocker = process.env.IS_DOCKER === 'true';
const configPath = isDocker
  ? '/app/configuration.yml'
  : path.resolve(__dirname, '../../../../configuration.yml');
const config = yaml.load(fs.readFileSync(configPath, 'utf8')) as any;

const mysqlConfig = config.mysql[env];
const host: string = mysqlConfig.host;
const port: number = mysqlConfig.port;
const user: string = mysqlConfig.user;
const password: string = mysqlConfig.password;
const baseDb: string = mysqlConfig.database;
const timezone: string = mysqlConfig.timezone || '+00:00';

const sequelize = new Sequelize(baseDb, user, password, {
  host: host,
  port: port,
  dialect: 'mysql',
  dialectOptions: {
    supportBigNumbers: true,
    charset: mysqlConfig.charset || 'utf8mb4',
    timezone: 'Z'
  },
  pool: {
    max: mysqlConfig.connectionLimit || 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  logging: false,
  timezone: timezone
});

export default sequelize;
