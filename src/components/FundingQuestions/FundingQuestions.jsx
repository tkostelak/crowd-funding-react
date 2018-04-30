import React from 'react';
import PropTypes from 'prop-types';

function FundingQuestions(props){

    function handleClick(){
        props.onConfirmQuestions(); 
    }
    return(
        <div>
            <p>Have you received funding from Squadfund previously?</p>
            <button onClick={handleClick}>Yes</button>
            <button>No</button>
        </div>
    );
}

FundingQuestions.propTypes = {
    onConfirmQuestions: PropTypes.func.isRequired
}

export default FundingQuestions;