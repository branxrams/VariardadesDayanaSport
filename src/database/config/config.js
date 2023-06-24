const dotenv = require('dotenv');
const dBCredential = process.env;
dotenv.config();

module.exports = {
  "development": {
    "username": dBCredential.DB_USER,
    "password": dBCredential.DB_PASS,
    "database": dBCredential.DB_DATABASE,
    "host": dBCredential.DB_HOST,
    "port": dBCredential.DB_PORT,
    "dialect": "mysql"
    
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
