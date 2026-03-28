const Location = require("../model/locationModel");

const addLocation = async (req, res) => {
  try {
    const { driverName, latitude, longitude } = req.body;

    const location = new Location({
      driverName,
      latitude,
      longitude
    });

    await location.save();

    res.json({ message: "Location added successfully", location });
  } catch (error) {
    res.status(500).json({ error: "Failed to add location" });
  }
};

const getLocations = async (req, res) => {
  try {
    const locations = await Location.find();
    res.json(locations);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch locations" });
  }
};

module.exports = {
  addLocation,
  getLocations
};