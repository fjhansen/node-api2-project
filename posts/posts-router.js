const express = require("express");
const db = require("../data/db");
const router = express.Router()

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

// router.get('/api/posts', (req, res) => {
//   db.find()
//   .then(posts => )
// })

module.exports = router