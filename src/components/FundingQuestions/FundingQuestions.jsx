import React from 'react';
import PropTypes from 'prop-types';

function FundingQuestions(props){

    function handleClickYes(){
        props.onConfirmQuestionsYes();
    }
    
    function handleClickNo(){
        props.onConfirmQuestionsNo(); 
    }
    return(
        <div>
            <p>Have you received funding from Squadfund previously?</p>
            <button onClick={handleClickYes}>Yes</button>
            <button onClick={handleClickNo}>No</button>
        </div>
    );
}

FundingQuestions.propTypes = {
    onConfirmQuestionsNo: PropTypes.func.isRequired,
    onConfirmQuestionsYes: PropTypes.func.isRequired
}

export default FundingQuestions;