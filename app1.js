const express = require('express');
const app = express();

// Endpoint: /recruitment/json-structure - Zadanie 1
app.get('/recruitment/json-structure', (req, res) => {
  const data = {
    list: [
      { name: 'item 1' },
      { name: 'item 2' },
      { name: 'item 21' },
      { name: 'item 3' },
      { name: 'item 10' },
    ],
    correctly_result: 21
  };

  res.json(data);
});

app.listen(3000, () => {
  console.log('Serwer działa na porcie 3000');
});
module.exports = app;
