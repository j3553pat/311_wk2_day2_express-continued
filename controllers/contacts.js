const contacts = require('../data/contacts');

const list = (req, res) => {;
  res.json(contacts)
};

const show = (req, res) => {
  let id = req.params.id;
  let findContact = contacts.find(contact => contact._id == id);
  if(!findContact){
    res.status(400).json({ msg: `${id} does not exist`})
  }
  res.json(findContact)
};

const create = (req, res) => {
  let addup = contacts.length + 1;
  let newContact = {
    _id : addup,
    name : req.body.name,
    occupation : req.body.occupation,
    avatar: req.body.avatar
  }
  contacts.push(newContact);
  addup++;
  res.json({ msg: `Contact Added`, newContact})
};

module.exports = { list, show, create }