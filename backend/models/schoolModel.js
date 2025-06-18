import db from "../config/db.js";
const School = {
  // CREATE
  create: (school, callback) => {
    const { name, address, latitude, longitude } = school;
    const sql =
      "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)";
    db.query(sql, [name, address, latitude, longitude], callback);
  },
  // READ ALL
  getAll: (callback) => {
    db.query("SELECT * FROM schools", callback);
  },
};

export default School;
