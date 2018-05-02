import React from 'react';
import FundingQuestions from '../FundingQuestions/FundingQuestions';
import FundingForm from '../FundingForm/FundingForm'; 
import FundingButton from '../FundingButton/FundingButton';
import FundingReferral from '../fundingReferral/FundingReferral';
import PropTypes from 'prop-types';

class FundingControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      questionsVisibleOnPage: false,
      formVisibleOnPage: false,
      buttonVisibleOnPage: true,
      referralVisibleOnPage: false
    };
    this.handleShowQuestions = this.handleShowQuestions.bind(this);
    this.handleConfirmQuestionsNo = this.handleConfirmQuestionsNo.bind(this); 
    this.handleConfirmQuestionsYes = this.handleConfirmQuestionsYes.bind(this);
  
  }    
  
  handleShowQuestions(){
    this.setState({questionsVisibleOnPage: true});
    this.setState({buttonVisibleOnPage: false});
  }

  handleConfirmQuestionsYes(){
    this.setState({referralVisibleOnPage: true});
  }
    
  handleConfirmQuestionsNo(){
    this.setState({formVisibleOnPage: true});  
  }
   
  render(){
    let currentlyVisibleContent = null;
        
    if (this.state.buttonVisibleOnPage == true) currentlyVisibleContent = <FundingButton onShowQuestions = {this.handleShowQuestions}/>;
    
    if (this.state.questionsVisibleOnPage == true) currentlyVisibleContent =         <FundingQuestions onConfirmQuestionsNo={this.handleConfirmQuestionsNo} onConfirmQuestionsYes = {this.handleConfirmQuestionsYes}/>;
    
    if (this.state.formVisibleOnPage == true) currentlyVisibleContent = <FundingForm onNewSubmission={this.props.onNewSubmission}/>; 
    
    if (this.state.referralVisibleOnPage == true) currentlyVisibleContent = <FundingReferral/>;
    
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

FundingControl.propTypes = {
  onNewSubmission: PropTypes.func.isRequired
};

export default FundingControl;