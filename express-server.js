
const express = require('express');

const app = express();

app.use(express.json());

// Temporary product data
let products = [
  { id: 1, name: 'Milk', price: 30 },
  { id: 2, name: 'Bread', price: 40 }
];

// GET: retrieve all products
app.get('/products', (req, res) => {
  res.json(products);
});

// POST: create a product
app.post('/products', (req, res) => {
  const newProduct = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price
  };

  products.push(newProduct);
  console.log(products);

  res.status(201).json(newProduct);
}); // POST route ends here

// PUT: update a product
app.put('/products/:id', (req, res) => {
  const id = Number(req.params.id);

  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({
      message: 'Product not found'
    });
  }

  product.name = req.body.name;
  product.price = req.body.price;

  res.json(product);
});

app.patch('/products/:id', (req, res) => {
  const id = Number(req.params.id);

  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({
      message: 'Product not found'
    });
  }

  if (req.body.name !== undefined) {
    product.name = req.body.name;
  }

  if (req.body.price !== undefined) {
    product.price = req.body.price;
  }

  res.json(product);
});


app.delete('/products/:id', (req, res) => {
  const id = Number(req.params.id);

  const index = products.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: 'Product not found'
    });
  }

  products.splice(index, 1);

  res.json({
    message: 'Product deleted successfully'
  });
});
console.log(products);


app.listen(3000, () => {
  console.log('Server running on port 3000');
});
