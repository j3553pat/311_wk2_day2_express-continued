const vehicles = require('../data/vehicles');

const list = (req, res) => {
  res.json(vehicles)
};

const show = (req, res) => {
  let id = req.params.id;
  let findVehicle = vehicles.find(vehicle => vehicle._id == id);
  if(!findVehicle){
    res.status(400).json({ msg: `${id} does not exist`})
  }
  res.json(findVehicle)
};

const create = (req, res) => {
  let addup = vehicles.length + 1;
  let newVehicle = {
    _id: addup,
    imgUrl: req.body.imgUrl,
    year: req.body.year,
    make: req.body.make,
    model: req.body.model,
    price: req.body.price,
    km: req.body.km,
    miles: req.body.miles,
    fuel: req.body.fuel,
    city: req.body.city,
    isNew: req.body.isNew
  }

  vehicles.push(newVehicle);
  addup++;
  res.json({ msg: `Vehicle Added`, newVehicle})
};

module.exports = { list, show, create }