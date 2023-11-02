const db = require('../models');
const status = require('../utils/status.utils');


exports.cityByState = (req) =>
  new Promise(async (resolve, reject) => {
    try {
      db.city.find({state_id: req.state})
        .then(async (result) => {
          resolve({ success: true, status: status.Ok, msg: 'Get City list Successfully!', data: result });
        })
        .catch((e) => {
          resolve({
            success: false,
            extra: e,
            status: status.BadRequest,
            errors: [{ msg: 'Something went wrong. Please try again .' }]
          });
        });
    } catch (error) {
      reject(error);
    }
  });


exports.state = () =>
  new Promise(async (resolve, reject) => {
    try {
        db.state.find({})
        .then(async (result) => {
          resolve({ success: true, status: status.Ok, msg: 'Get State list Successfully!', data: result });
        })
        .catch((e) => {
          resolve({
            success: false,
            extra: e,
            status: status.BadRequest,
            errors: [{ msg: 'Something went wrong. Please try again .' }]
          });
        });
    } catch (error) {
      reject(error);
    }
  });


