import React from 'react';

class FundingControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false
        };
    }
        
    render(){
        return (
            <div>
                <p>Testing out this stateful component</p>
            </div>
        )
    }
}

export default FundingControl;