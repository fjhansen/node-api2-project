const express = require("express");
const db = require("../data/db");
const router = express.Router()

// GET
router.get('/', (req, res)  => {
  db.find()
  .then(posts => {
    res.status(200).json(posts);
  })
  .catch(error => {
    console.log(error);
    res.status(500).json({
      message: 'Error retrieving the posts'
    })
  })
})

router.get('/:id', (req, res) => {
  db.findById(req.params.id)
  .then(posts => {
    if (posts) {
      res.status(200).json(posts)
    } else {
      res.status(404).json({message: 'The post information could not be retrieved'})
    }
  })
})

router.get('/:id/comments', (req, res) => {
  db.findCommentById(req.params.id)
  .then(posts => {
    if (posts) {
      res.status(200).json(posts)
    } else {
      res.status(404).json({message: 'The post with the specified ID does not exist.'})
    }
  })
})


module.exports = router