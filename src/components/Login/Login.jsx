import React from 'react';

function Login(){

  return (
    <div className = 'loginContent'>
      <h1>Login</h1>
      <form>
        <input
          type='text'
          id='email'
          className='emailInput'
          placeholder='email'/>
          <br/>
        <input
          type='text'
          id='password'
          className='passwordInput'
          placeholder='password'/>
          <br/>
        <button
          className='loginButton'
          type='submit'>
          Login
          </button>
      </form>
      <style jsx>{`
        .loginContent {
          color: #111;
          margin-top: 12%;
          background-color: #fbfbfb;
          width: auto;
          padding: 5%;
          border-radius: 3px;
          box-shadow: #555 1px 1px 8px 1px;
        }
        .emailInput{
          margin-top: 5%;
        }
        .passwordInput{
          margin-top: 5%;
        }
        .loginButton{
          margin-top: 10%;
        }
      `}
      </style>
    </div>
  );
}

export default Login;
