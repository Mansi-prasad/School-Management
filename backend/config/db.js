import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const DBUrl = process.env.DBURL;
const connection = mysql.createConnection(DBUrl);
connection.connect((err) => {
  if (err) {
    console.error("MySQL connection failed:", err);
    return;
  }
  console.log("Connected to MySQL Database");
});

export default connection;
