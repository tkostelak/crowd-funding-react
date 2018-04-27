import React from 'react';

function Signup(){

  return (
    <div className = 'signupContent'>
      <h1>Signup</h1>
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
          className='signupButton'
          type='submit'>
          Signup
          </button>
      </form>
      <style jsx>{`
        .signupContent {
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
        .signupButton{
          margin-top: 10%;
        }
      `}
      </style>
    </div>
  );
}

export default Signup;
