import React from 'react';
import FundingQuestions from '../FundingQuestions/FundingQuestions';
import Funding from '../Funding/Funding'; 
import FundingButton from '../FundingButton/FundingButton';

class FundingControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            questionsVisibleOnPage: false,
            formVisibleOnPage: false,
            buttonVisibleOnPage: true
        };
        this.handleShowQuestions = this.handleShowQuestions.bind(this);
        this.handleConfirmQuestions = this.handleConfirmQuestions.bind(this); 
    
    }    
    handleShowQuestions(){
        this.setState({questionsVisibleOnPage: true})
        this.setState({buttonVisibleOnPage: false})
    }

    handleConfirmQuestions(){
        this.setState({formVisibleOnPage: true})     
    }
   
    render(){
        let currentlyVisibleContent = null;
        
        if (this.state.buttonVisibleOnPage == true) currentlyVisibleContent = <FundingButton onShowQuestions = {this.handleShowQuestions}/>
        if (this.state.questionsVisibleOnPage == true) currentlyVisibleContent =         <FundingQuestions onConfirmQuestions={this.handleConfirmQuestions}/>
        if (this.state.formVisibleOnPage == true) currentlyVisibleContent = <Funding/> 
        return (
            <div>
                {currentlyVisibleContent}
            </div>
        )
    }
}

export default FundingControl;