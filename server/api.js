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


// Create new user
router.get('/auth', apiController.verifyUser, apiController.createUser, (req, res) => {
 return res.status(200);
})

// // DELETE request
// router.delete('/posts', apiController.postTask, (req, res) => {
//   return res.sendStatus(200);
// });

module.exports = router;