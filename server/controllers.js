const db = require('./model.js');
const cookieParser = require('cookie-parser');
const axios = require('axios');
const apiController = {};
const dotenv = require('dotenv');
dotenv.config();

// GET request
apiController.getPosts = (req, res, next) => {
  const queryStr = 'SELECT * FROM posts;';
  db.query(queryStr, (err, result) => {
    if (err) console.log(err.stack);
    console.log('result from apiController.getPosts', result);
    res.locals.posts = result;
    return next();
  })
};

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
};

//should create user from 'Create Account Page'
apiController.createUser = (req, res, next) => {
   //INSERT INTO 
   return next();
};

apiController.handleOAuth = (req, res, next) => {
  console.log('req.query:', req.query);
  console.log('req.query.code:', req.query.code);
  if(req.query.code) {
    res.locals.code = req.query.code;
  } else {
    return next({err: "there was an error with oauth"});
  }  
  return next();
};

apiController.fetchAccessToken = (req, res, next) => {
  console.log('fetchAccessToken was triggered!')
  try {
    axios.post('https://github.com/login/oauth/access_token', {
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      code: res.locals.code
    })
    .then(function (response) {
      const responseStr = response.data;
      const [access_token, scope, token_type] = responseStr.split('&').map(e => e.slice(e.indexOf('=') + 1));
      res.locals.access_token = access_token //, res.locals.scope = scope, res.locals.token_type = token_type;
      console.log("res.locals.access_token", res.locals.access_token)
      return next();
    })
    .catch(function (error) {
      return next({err: "Axios error occurred."})
    });
  } catch (err) {
    console.log('err')
  }
}

apiController.getUserInfoAndSave = (req, res, next) => {
  console.log('getUserInfoAndSave invoked!');

  try {
    axios.get("https://api.github.com/user", {
      headers: {
        Authorization: `token ${res.locals.access_token}`,
      }
    })
    .then(function (response) {
      console.log('response', response)
      const { name, location, login, html_url } = response.data;
      const insertUser = `INSERT INTO users (_id, user_name, full_name, github_url, access_token, cohort, location) VALUES (DEFAULT, '${login}', '${name}' , '${html_url}', '${res.locals.access_token}', ${46},  '${location}');`   
      db.query(insertUser, (err, result) => {
        if (err) console.log(err.stack);
        console.log('result from apiController.getUserInfoandSave', result);
        res.locals.newUser = result;
        return next();
      })
    })
    .catch(function (error) {
      console.log('error')
      return next({err: "Axios error occurred."})
    });

  } catch (err) {
    console.log('err occured', err)
  }
}

module.exports = apiController;

/*
 data: {
  login: 'savoy1211',
  id: 25489709,
  node_id: 'MDQ6VXNlcjI1NDg5NzA5',
  avatar_url: 'https://avatars.githubusercontent.com/u/25489709?v=4',
  url: 'https://api.github.com/users/savoy1211',
  html_url: 'https://github.com/savoy1211',
  name: 'Ryan K. Lee',
}
*/