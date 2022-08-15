const express = require('express');
const { bodyParser } = require('body-parser');

const app = express();

app.use(bodyParser.json()); 

app.get('/', (req, res) => {
    res.status(200).send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (req, res) => {
  res.status(200).send(`Payment methods for cart ${req.params.id}`);
});

app.get('/available_payments', (req, res) => {
  const obj = {
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  };
  res.json(obj);
});

app.post('/login', (req, res) => {
  const username = req.body.userName;
  res.status(200).send(`Welcome ${username}`);
});


app.listen(7865, () => console.log('API available on localhost port 7865'));
