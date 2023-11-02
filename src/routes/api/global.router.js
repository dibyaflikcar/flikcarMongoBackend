const express = require('express');
const global = require('../../controllers/global.controller');
const status = require('../../utils/status.utils');

const router = express.Router();

router.get('/state', async (req, res, next) => {
  const response = await global
    .state()
    .catch((e) => res.send({ success: false, errors: [{ msg: e.message }], status: status.InternalServerError }));
  return res.send(response);
});

router.post('/find-city-by-state', async (req, res, next) => {
  const response = await global
    .cityByState(req.body)
    .catch((e) => res.send({ success: false, errors: [{ msg: e.message }], status: status.InternalServerError }));
  return res.send(response);
});

module.exports = router;