import React from 'react';
import PropTypes from 'prop-types';

function FundingButton(props){

  return(
    <div>
      <button onClick={props.onShowQuestions}>Get funding!</button>
      <style jsx>{`
        margin-left: 5%
        button{
        margin-top: 1%;
        width: 40%;
        height: 5vw;
        font-family: Monospace;
        background-color: #33b5e5;
        font-weight: bold;
        font-size: 1.5em;
        border-radius: 3px;
        color: #111;        
        }
        `}
      </style> 
    </div>
  );
}
  

FundingButton.propTypes = {
  onShowQuestions: PropTypes.func.isRequired
};

export default FundingButton;