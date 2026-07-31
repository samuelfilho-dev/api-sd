const Squire = require("../models/Squires");
const squireSchema = require("../schemas/squires.schema");
const bcrypt = require("bcrypt");

async function getAllSquires() {
  return await Squire.find();
}

async function getSquireById(id) {
  return await Squire.findById(id);
}

async function createSquire(squireData) {
  const check = squireSchema.safeParse(squireData);

  if (!check.success) {
    console.error("Erro de validação:", check.error.format());
    return;
  }

  if (squireData.password !== null && squireData.password !== undefined) {
    squireData.password = await bcrypt.hash(squireData.password, 10);
  }

  const newSquire = new Squire(squireData);
  const savedSquire = await newSquire.save();
  const { password, ...squireWithoutPassword } = savedSquire.toObject();

  return squireWithoutPassword;
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
