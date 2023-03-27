const express = require("express");
const bodyParser = require("body-parser");
const contacts = require("/data/contacts");
const vehicles = require("/data/vehicles");
const comments = require("/data/comments");
const products = require("/data/products");
const app = express();
const port = process.env.PORT || 4001;

app.listen(port, () => {
    console.log(`Web server is listening on port ${port}!`);
});

app.use(express.static('public'))
app.use(bodyParser.json())

app.get('/contacts', (req, res) => {
    return res.json(contacts)
})

app.get('/vehicles', (req, res) => {
    return res.json(vehicles)
})