const products = require('../data/products')

const list = (req, res) => {
  res.json(products)
}

const show = (req, res) => {
  let id = req.params.id;
  let findProduct = products.find(product => product._id == id);
  if(!findProduct){
    res.status(400).json({ msg: `${id} does not exist`})
  }
  res.json(findProduct)
}

const create = (req, res) => {
  let addup = products.length + 1;

  let newProduct = {
    _id : addup,
    name : req.body.name,
    description : req.body.description,
    rating: req.body.rating,
    imgUrl: req.body.imgUrl,
    price: req.body.price,
    category: req.body.category,
    reviews: req.body.reviews
  };

  products.push(newProduct);
  addup++;
  res.json({ msg: `Product Added`, newProduct})
}

module.exports = { list, show, create }