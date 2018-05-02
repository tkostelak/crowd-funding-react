import React from 'react';
import PropTypes from 'prop-types';
import Submission from '../Submission/Submission';

function FundingList(props){
  return(
    <div>
      {props.fundingList.map((submission, index) =>
        <Submission firstName ={submission.firstName}
          lastName={submission.lastName}
          phoneNumber={submission.phoneNumber}
          requestAmount={submission.requestAmount}
          summaryText={submission.summaryText}
          key={index}/>   
      )}
    </div>
  );
}

FundingList.propTypes = {
  fundingList: PropTypes.array
};

export default FundingList;