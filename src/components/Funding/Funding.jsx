import React from 'react';

function Funding() {
  return (
    <div className='fundingContent'>
      <h1>Squadfund your next adventure!</h1>
      <form>
        <input  
          placeholder='first name'
          type='text'
          required
          id='firstName'/>
        <br/>
        <input  
          placeholder='last name'
          type='text'
          required
          id='lastName'/>
        <br/>
        <input
          placeholder='phone number'
          type='text'
          required
          id='phoneNumber' />
        <br/>
        <input
          placeholder='amount (US dollars)'
          type='text'
          required
          id='requestAmount' />
        <br/>
        <textarea
          id='summaryText'
          required
          placeholder='Sell us on your idea!'/>
        <br/>
        <button type='submit'>Submit</button>
      </form>
      <style jsx>{`
        .fundingContent{
          text-align: center;
          color: #111;
          margin-top: 3%;
          background-color: #fbfbfb;
          width: auto;
          padding: 5%;
          border-radius: 3px;
          box-shadow: #555 1px 1px 8px 1px;  
        }
        
        button{
          margin-top: 1%;
          width: 50%;
          height: 4vw;
          font-family: Monospace;
          background-color: #33b5e5;
          font-weight: bold;
          font-size: 1.5em;
          border-radius: 3px;
          color: #111;
        }
        
        textarea{
          width: 50%;
          height: 10vh;
        }
        
        input{
          width: 50%;
          height: 2.5vh;
          margin-bottom: 2%;
        }
        h1{
          font-family: Amatic SC;
          font-weight: bolder;
          font-size: 3.5em;
        }
        `}
      </style>   
    </div>
  );
}

export default Funding;