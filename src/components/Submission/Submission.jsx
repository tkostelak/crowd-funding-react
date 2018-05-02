import React from 'react';
import PropTypes from 'prop-types';

function Submission(props){
  return (
    <div className='submissionContent'>
      <h2>{props.firstName} {props.lastName}</h2>
      <h2>{props.phoneNumber}</h2>
      <h2>${props.requestAmount}</h2>
      <h3>{props.summaryText}</h3>
      <style jsx>{`
        .submissionContent{
          text-align: center;
          color: #111;
          margin-top: 3%;
          background-color: #fbfbfb;
          width: 50%;
          padding: 2%;
          border-radius: 3px;
          box-shadow: #555 1px 1px 8px 1px;  
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
  summaryText: PropTypes.string.isRequired
};

export default Submission;