const express = require('express');
const { getTours, getTour, postTrip, updateTrip, deleteTrip } = require('../../controllers/tours');
const router = express.Router();

router.get('/', getTours)
  .get('/:id', getTour)
  .post('/', postTrip)
  .put('/:id', updateTrip)
  .delete('/:id', deleteTrip)

module.exports = router;