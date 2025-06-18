import School from "../models/schoolModel.js";
import { calculateDistance } from "../utils/distance.js";
// add school
export const addSchool = async (req, res) => {
  const { name, address, latitude, longitude } = req.body;

  // empty check
  if (!name || !address || latitude == null || longitude == null) {
    return res.status(400).json({ error: "All fields are required" });
  }
  // Validate name and address
  if (typeof name !== "string" || name.trim().length < 3) {
    return res
      .status(400)
      .json({ error: "Name must be a string with at least 3 characters" });
  }

  if (typeof address !== "string" || address.trim().length < 3) {
    return res
      .status(400)
      .json({ error: "Address must be a string with at least 3 characters" });
  }

  // validate latitude and longitude
  if (typeof latitude !== "number" || typeof longitude !== "number") {
    return res
      .status(400)
      .json({ error: "Latitude and longitude must be numbers" });
  }

  School.create({ name, address, latitude, longitude }, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: "School added successfully!" });
  });
};

// list schools

export const listSchools = (req, res) => {
  const { latitude, longitude } = req.query; // getting the value from query string parameter

  // Input validation
  if (!latitude || !longitude) {
    return res
      .status(400)
      .json({ error: "Latitude and longitude query parameters are required" });
  }

  const userLat = parseFloat(latitude); // parses a string and returns the first number
  const userLng = parseFloat(longitude);

  if (isNaN(userLat) || isNaN(userLng)) {
    return res
      .status(400)
      .json({ error: "Latitude and longitude must be valid numbers" });
  }

  // Get all schools and sort by distance
  School.getAll((err, schools) => {
    if (err) return res.status(500).json({ error: err.message });

    const sortedSchools = schools
      // a new array with new property distance.
      .map((school) => ({
        ...school,
        distance: calculateDistance(
          userLat,
          userLng,
          school.latitude,
          school.longitude
        ),
      }))
      // sort the array (a and b, two school objects)
      //  compares them, If negative, a comes before b.
      // If positive, b comes before a.
      // If 0, their order is unchanged.
      .sort((a, b) => a.distance - b.distance);
    res.json(sortedSchools);
  });
};
