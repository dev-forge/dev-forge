import React, { useState, useEffect } from 'react';
import './Login.scss';

function Login() {
  const [data, setData] = useState({default: true});
  console.log('env variables', process.env.REACT_APP_CLIENT_ID, process.env.REACT_APP_CLIENT_SECRET, process.env.REACT_APP_REDIRECT_URI);
  return (
    <section id="login">
      <form>
        <fieldset>
          <legend>Login</legend>
          <ul>
            <li>
              <label for="username">Username:</label>
              <input type="text" id="username" required />
            </li>
            <li>
              <label>Password:</label>
              <input type="password" id="password" required />
            </li>
          </ul>
        </fieldset>
          <a
              className="login-link"
              href={`https://github.com/login/oauth/authorize?scope=user&client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`}
              // onClick={() => {
              //   setData({ ...data, errorMessage: "" });
              // }}
            > authenticate </a>
        <button>
          Login with GitHub
          <a
              className="login-link"
              href={`https://github.com/login/oauth/authorize?scope=user&client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`}
              // onClick={() => {
              //   setData({ ...data, errorMessage: "" });
              // }}
            />
        </button>
      </form>
    </section>
  );
}

export default Login;
