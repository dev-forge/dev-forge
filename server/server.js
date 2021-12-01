const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const apiRouter = require('./api');
const cookieParser = require('cookie-parser');

// parses requests to access req.body
app.use(express.json());

// parses incoming encoded url requests, true allows nested objects
app.use(express.urlencoded({ extended: true }));
//cookie parser
app.use(cookieParser());
// Api Router
app.use('/api', apiRouter);

// local error handler (404)
app.use((req, res) => res.status(404).send('Wrong path'));

// global error handler (500) for serverside internal errors
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});


module.exports = app.listen(PORT, () => console.log(`Listening on port ${PORT}`));