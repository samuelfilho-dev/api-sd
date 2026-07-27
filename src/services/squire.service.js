const Squire = require("../models/Squires");

async function getAllSquires() {
  return await Squire.find();
}

async function getSquireById(id) {
  return await Squire.findById(id);
}

async function createSquire(squireData) {
  const newSquire = new Squire(squireData);
  return await newSquire.save();
}

async function updateSquire(id, squireData) {
  return await Squire.findByIdAndUpdate(id, squireData, {
    new: true,
    timestamps: true,
  });
}

async function deleteSquire(id) {
  return await Squire.findByIdAndDelete(id);
}

module.exports = {
  getAllSquires,
  getSquireById,
  createSquire,
  updateSquire,
  deleteSquire,
};
