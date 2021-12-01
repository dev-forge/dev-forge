const db = require('./model.js');

const apiController = {};

// GET request
apiController.getPosts = (req, res, next) => {
  const queryStr = 'SELECT * FROM posts;';
  db.query(queryStr, (err, result) => {
    if (err) console.log(err.stack);
    console.log('result from apiController.getPosts', result);
    res.locals.posts = result;
    return next();
  })
}

// POST request
apiController.sendUserPost = (req, res, next) => {
  // const username = `SELECT _id ${'user_name'} FROM users;`
  const username = 'rlee';
  const date = new Date().toLocaleString();
  const queryStr = `INSERT INTO posts VALUES(DEFAULT, '${'My First Post'}', '${'lkadjflkjsdfaklsdjkkdakl'}', '${username}', '${date}', ${0});`;
  db.query(queryStr, (err, result) => {
    if (err) console.log(err.stack);
    console.log('result from apiController.sendUserPost', result);
    res.locals.newPost = result;
    return next();
  })
}


apiController.getUser = (req, res, next) => {

}

module.exports = apiController;