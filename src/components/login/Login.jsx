import React, { useState, useEffect } from 'react';
import './Login.scss';

function Login() {
  const [data, setData] = useState({default: true});

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
        <button>
          Login with GitHub
          <a
              className="login-link"
              href={`https://github.com/login/oauth/authorize?scope=user&client_id=placeholder&redirect_uri=placeholder`}
              onClick={() => {
                setData({ ...data, errorMessage: "" });
              }}
            />
        </button>
      </form>
    </section>
  );
}

export default Login;
