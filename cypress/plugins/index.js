const oracledb = require("oracledb");

oracledb.initOracleClient({ libDir: "/Users/weerapornpaisingkhon/instantclient_19_3" });

const queryData = (query, dbconfig) => {
  return new Promise((resolve, reject) => {
    oracledb.getConnection(dbconfig, (err, connection) => {

      if (err) {
        console.error(err.message);
        return;
      }
      
      console.log("Connection was successful!!!");

      connection.execute(query, (err, result) => {
        if (err) {
          error = err;
          console.log("SQL error ====>" + error);
          reject(error);
        } else {
          resolve(result);
          connection.close();
        }
      });
    });
  });
};


module.exports = (on, config) => {  
  on("task", {
    sqlQuery: (query) => {
      return queryData(query, config.env.db);
    },
  });
};