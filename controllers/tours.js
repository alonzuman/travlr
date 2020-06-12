const pool = require('../db');

// Get all tours @public
// GET /api/v1/tours
const getTours = async (req, res) => {
  try {
    // TODO limit fetch for 10 a time
    const tours = await pool.query('SELECT * FROM main.tours_text_v')
    // console.log(tours.rows)
    res.json(tours.rows);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
}

// Get a specific tour @public
// GET /api/v1/tours/:id
const getTour = async (req, res) => {
  const id = req.params.id;
  try {
    // Fetching tour
    const tour = await pool.query(`SELECT * FROM main.tours_text_v WHERE tour_id = ${id}`)

    // Fetching tour reviews
    const reviews = await pool.query(`SELECT * FROM main.reviews_text_v WHERE reviewed_entity_type_id = ${id}`);
    res.json({
      tour: tour.rows[0],
      reviews: reviews.rows
    });
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};

const postTrip = (req, res) => res.send('posting trip...');
const updateTrip = (req, res) => res.send('posting trip...');
const deleteTrip = (req, res) => res.send('posting trip...');

module.exports = { getTours, getTour, postTrip, updateTrip, deleteTrip }