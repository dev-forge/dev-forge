import React from 'react';
import './Login.scss';

function Login() {
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
        <button>Submit</button>
      </form>
    </section>
  );
}

export default Login;
