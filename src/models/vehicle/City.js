const mongoose = require("mongoose");

const citySchema = new mongoose.Schema({
    _id: {
      type: Number,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state_id: {
      type: Number,
      required: true,
    },
  },{
    collection : 'cities' // the collection to use for this schema
  });


  module.exports = mongoose.model("City", citySchema);
  