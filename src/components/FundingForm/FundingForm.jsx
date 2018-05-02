import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function FundingForm(props) {
  
  let _firstName = null;
  let _lastName = null;
  let _phoneNumber = null;
  let _requestAmount = null;
  let _summaryText = null;

  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    
    let newFundingSubmission = {
      firstName: _firstName.value,
      lastName: _lastName.value,
      phoneNumber: _phoneNumber.value,
      requestAmount: _requestAmount.value,
      summaryText: _summaryText.value,
      id: v4()

    };
    
    props.onNewSubmission(newFundingSubmission);

    _firstName.value = '';
    _lastName.value = '';
    _phoneNumber.value = '';
    _requestAmount.value = '';
    _summaryText.value = '';
  
  }  
  return (
    <div className='fundingContent'>
      <h1>Squadfund your next adventure!</h1>
      <form onSubmit={handleNewTicketFormSubmission}>
        <input  
          placeholder='first name'
          type='text'
          required
          id='firstName'
          ref={(input) => {_firstName = input;}}/> 
        <br/>
        <input  
          placeholder='last name'
          type='text'
          required
          id='lastName'
          ref={(input) => { _lastName = input;}}/>
        <br/>
        <input
          placeholder='phone number'
          type='text'
          required
          id='phoneNumber' 
          ref={(input) => { _phoneNumber = input; }}/>
        <br/>
        <input
          placeholder='amount (US dollars)'
          type='text'
          required
          id='requestAmount' 
          ref={(input) => { _requestAmount = input; }} />
        <br/>
        <textarea
          id='summaryText'
          required
          placeholder='Sell us on your idea!'
          ref={(textarea) => { _summaryText = textarea; }} />
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
          font-size:  4.5vw;
        }
        `}
      </style>   
    </div>
  );
}

FundingForm.propTypes = {
  onNewSubmission: PropTypes.func
};

export default FundingForm;