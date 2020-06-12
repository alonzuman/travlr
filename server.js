const express = require('express');
const app = express();
const cors = require('cors');
const tours = require('./routes/api/tours');
const users = require('./routes/api/users');
const path = require('path');
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/api/v1/tours', tours);
app.use('/api/v1/users', users);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '/client/build/index.html'))
  })
}

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
