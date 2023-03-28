const comments = require('../data/comments');

const list =  (req, res) => {
  res.json(comments)
}

const show = (req, res) => {
  let id = req.params.id;
  let findComment = comments.find(comment => comment._id == id);
  if(!findComment){
    res.status(400).json({ msg: `${id} does not exist`})
  }
  res.json(findComment)
}

const create = (req, res) => {
  let addup = comments.length + 1;
  let newComment = {
    _id : addup,
    body : req.body.body,
    postId : 1,
  }
  contacts.push(newComment);
  addup++;
  res.json({ msg: `Contact Added`, newComment})
}

module.exports = { list, show, create }