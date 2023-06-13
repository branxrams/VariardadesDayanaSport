const bcrypt = require('bcryptjs')

const hash = {
    generateHashAsync: (password) => {
        return new Promise((resolve, reject) => {
          bcrypt.hash(password, 10, (error, hash) => {
            if (error) {
              reject(error);
            } else {
              resolve(hash);
            }
          });
        });
    },
    comparePasswordAsync: (password, hash) => {
        return new Promise((resolve, reject) => {
          bcrypt.compare(password, hash, (error, match) => {
            if (error) {
              reject(error);
            } else {
              resolve(match);
            }
          });
        });
    }
}

module.exports = hash;  