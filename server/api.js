const express = require('express');
const apiController = require('./controllers.js');
const router = express.Router();

// GET request
router.get('/posts', apiController.getPosts, (req, res)=> {
  return res.status(200).json(res.locals.posts);
});

// POST request
router.post('/posts', apiController.sendUserPost, (req, res) => {
  return res.sendStatus(200);
});


// Handle OAuth
router.get('/auth', apiController.handleOAuth, apiController.createUser, (req, res) => {

})

// // DELETE request
// router.delete('/posts', apiController.postTask, (req, res) => {
//   return res.sendStatus(200);
// });

module.exports = router;