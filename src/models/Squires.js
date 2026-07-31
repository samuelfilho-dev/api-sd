const moogose = require("mongoose");


const squiresSchema = new moogose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  },
);

const Squire = moogose.model("squires", squiresSchema);
module.exports = Squire;
