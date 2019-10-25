const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/online-store');
const Product = mongoose.model('Product', {
  id: Number,
  name: String,
  prise: mongoose.Schema.Types.Decimal128,
});

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('work'));

app.get(
  '/products',
  (req, res) => Product.find()
    .exec()
    .then(products => res.json(products)),
);

app.post(
  '/products',
  (req, res) => Product.create(req.body)
    .then(createProduct => res.json(createProduct)),
);

app.put(
  '/products/:id',
  (req, res) => Product.findOneAndUpdate({ id: req.params.id }, req.body)
    .exec()
    .then(product => res.json(product)),
 );

app.delete(
  '/products/:id',
  (req, res) => Product.deleteOne({id: req.params.id})
    .exec()
    .then(() => res.json({ success: true })),
);

app.listen(3000, () => console.log('Listening on port 3000...'));
