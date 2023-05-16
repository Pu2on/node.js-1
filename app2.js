const express = require('express');
const app = express();
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getRandomString = () => {
  const randomNumber = getRandomNumber(-100, 100);
  return `item ${randomNumber}`;
};

// Endpoint: /recruitment/random-json-structure - Zadanie 2
app.get('/recruitment/random-json-structure', (req, res) => {
  const listLength = getRandomNumber(20, 1000);
  const list = [];
  let maxNumber = -Infinity;

  for (let i = 0; i < listLength; i++) {
    const item = {
      name: getRandomString()
    };

    const number = parseInt(item.name.split(' ')[1]);

    if (!isNaN(number) && number > maxNumber) {
      maxNumber = number;
    }

    list.push(item);
  }

  const jsonStructure = {
    list: list,
    correctly_result: maxNumber
  };

  res.json(jsonStructure);
});

app.listen(3001, () => {
    console.log('Serwer działa na porcie 3001');
  });

module.exports = app;