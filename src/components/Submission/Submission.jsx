import React from 'react';
import PropTypes from 'prop-types';

function Submission(props){
  return (
    <div className='submissionContent'>
      <h2>Name: {props.firstName} {props.lastName}</h2>
      <h2>Phone number: {props.phoneNumber}</h2>
      <h2>Amount Requested: ${props.requestAmount}</h2>
      <h2>Description: {props.summaryText}</h2>
      <style jsx>{`
        h2{
          text-align: left;
        }
        .submissionContent{
          text-align: center;
          color: #111;
          margin-top: 3%;
          background-color: #fbfbfb;
          width: 50%;
          padding: 2%;
          border-radius: 3px;
          box-shadow: #555 1px 1px 8px 1px;  
          background-color: #33b5e5;
        }
        `}
      </style>   
    </div>

  );
}

Submission.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  requestAmount: PropTypes.string.isRequired,
  summaryText: PropTypes.string.isRequired,
};

export default Submission;