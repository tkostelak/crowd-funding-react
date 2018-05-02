import React from 'react';
import PropTypes from 'prop-types';
import Submission from '../Submission/Submission';

function FundingList(props){
  console.log(props.fundingList);
  return(
    <div>
      {props.fundingList.map((submission) =>
        <Submission firstName ={submission.firstName}
          lastName={submission.lastName}
          phoneNumber={submission.phoneNumber}
          requestAmount={submission.requestAmount}
          summaryText={submission.summaryText}
          key={submission.id}/>  
          
      )}
    </div>
  );
}

FundingList.propTypes = {
  fundingList: PropTypes.array
};

export default FundingList;