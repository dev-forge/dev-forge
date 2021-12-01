import React from 'react';
import './Login.scss';

function Login() {
  const client_id = process.env.REACT_APP_CLIENT_ID;
  const redirect_uri = process.env.REACT_APP_REDIRECT_URI;

  return (
    <section id="login">
      <form action={`https://github.com/login/oauth/authorize?scope=user&client_id=${client_id}&redirect_uri=${redirect_uri}`}>
        <fieldset>
          <legend>Login</legend>
        </fieldset>
        <input type="submit" value="Login with GitHub" />
      </form>
    </section>
  );
}

export default Login;
