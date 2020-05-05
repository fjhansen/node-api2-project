const express = require('express');
const postsRouter = require('./posts/posts-router.js');

const server = express();
const port = 4444;

server.use(express.json());

server.use('/api/posts', postsRouter);

server.get('/', (req, res) => {
  res.send('❤ ❤ ❤ L I V E ❤ ❤ ❤')
})



server.listen(port, () => {
  console.log(`\n ❤ ❤ ❤	 LIVE  ON  ${port} ❤ ❤ ❤	`)
})


