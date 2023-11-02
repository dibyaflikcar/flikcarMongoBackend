const mongoose = require("mongoose");

const stateSchema = new mongoose.Schema({
    _id: {
      type: Number,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    name: {
        type: String,
        required: true,
    },
    country_id: {
      type: Number,
      required: true,
    },
  },{
    collection : 'states' // the collection to use for this schema
  });


  module.exports = mongoose.model("State", stateSchema);
  