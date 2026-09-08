const { model } = require("mongoose");

const { PositionsSchema } = require("../schemas/PositionsSchemas");

const PositionsModel = model("position", PositionsSchema);

module.exports = { PositionsModel };