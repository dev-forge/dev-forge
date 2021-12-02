import React from 'react';
import image from '../../../assets/images/github.png';
import './Login.scss';

const Login = (props) => {
  const client_id = process.env.REACT_APP_CLIENT_ID;
  const redirect_uri = process.env.REACT_APP_REDIRECT_URI;

  return (
    <section id="login">
      <form>
        <fieldset>
          <legend>Login</legend>
          <img src={image} width="100" height="100" />
        </fieldset>
        <a
          className="login-link"
          href={`https://github.com/login/oauth/authorize?scope=user&client_id=${client_id}&redirect_uri=${redirect_uri}`}
        >
          <p>
            Login with GitHub
          </p>
        </a>
      </form>
    </section>
  );
};

export default Login;