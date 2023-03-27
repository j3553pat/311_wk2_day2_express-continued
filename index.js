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


app.use(express.static('public'));

app.get("/contacts", (req, res) => {
    res.json(contacts)
})

app.get("/vehicles", (req, res) => {
    res.json(vehicles)
})
app.get("/comments", (req, res) => {
    res.json(comments)
})
app.get("/products", (req, res) => {
    res.json(products)
})

app.get("/contacts/:id", (req, res) => {
    res.json(contacts)
})
app.get("/vehicles/:id", (req, res) => {
    res.json(contacts)
})
app.get("/comments/:id", (req, res) => {
    res.json(contacts)
})
app.get("/products/:id", (req, res) => {
    res.json(contacts)
})
