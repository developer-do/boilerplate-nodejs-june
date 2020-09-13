var mysql = require("mysql2");

const config = {
  host: "localhost",
  user: "root",
  port: 3305,
  password: "password", //주녕이쩔업
  database: "dbname",
};

class Database {
  constructor(props) {
    console.log(props);
    this.config = props;
    this.connection = mysql.createConnection(props);
  }
  query(sql, args) {
    const self = this;
    const connection = mysql.createConnection(self.config);
    return new Promise((resolve, reject) => {
      connection.query(sql, args, (err, rows) => {
        if (err) return reject(err);
        resolve(rows);
      });
    });
  }
}

const database = new Database(config);

module.exports = {
  database,
};
