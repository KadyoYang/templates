import * as mysql from "mysql2/promise";

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  database: process.env.MYSQL_DATABASE,
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
});

export const getConnection = async () => {
  return await connection.getConnection();
};
