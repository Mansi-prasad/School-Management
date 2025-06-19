import db from "../config/db.js";
const School = {
  // CREATE
  create: (school, callback) => {
    const { id, name, address, latitude, longitude } = school;
    const sql =
      "INSERT INTO school (id, name, address, latitude, longitude) VALUES (?, ?, ?, ?, ?)";
    db.query(sql, [id, name, address, latitude, longitude], callback);
  },
  // READ ALL
  getAll: (callback) => {
    db.query("SELECT * FROM school", callback);
  },
};

export default School;
