const express = require('express');
const app = express();

const doctors = [
  {
    id: 1,
    name: 'John Smith',
    specialty: 'Pediatrics'
  },
  {
    id: 2,
    name: 'Jane Doe',
    specialty: 'Surgery'
  },
  {
    id: 3,
    name: 'David Johnson',
    specialty: 'Internal Medicine'
  }
];

app.get('/doctors', (req, res) => {
  res.send(doctors);
});

app.listen(8080, () => {
  console.log('Server listening on port 8080');
});
