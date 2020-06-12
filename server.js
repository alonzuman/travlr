const express = require('express');
const app = express();
const cors = require('cors');
const tours = require('./routes/api/tours')
const users = require('./routes/api/users')
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/api/v1/tours', tours);
app.use('/api/v1/users', users);

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
