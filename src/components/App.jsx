import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Welcome from './Welcome/Welcome';
import Navbar from './Navbar/Navbar';
import Browse from './Browse/Browse';
import Error404 from './Error404/Error404';
import About from './About/About';
import FundingControl from './FundingControl/FundingControl';
import FundingList from './FundingList/FundingList';
import Footer from './Footer/Footer';

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      masterFundingList: []
    },
    this.handleNewSubmission = this.handleNewSubmission.bind(this);
  }
  
  handleNewSubmission(newSubmissionForm){
    let newFundingList = this.state.masterFundingList.slice();
    newFundingList.push(newSubmissionForm);
    this.setState({masterFundingList: newFundingList});

  }

  render(){
    return (
      <div className="container">
        <Navbar/> 
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route path='/browse' component={Browse} />
          <Route path='/about' component={About} />
          <Route path='/funding' render={()=><FundingControl onNewSubmission={this.handleNewSubmission} />} />
          <Route path='/admin/funding' render={()=><FundingList fundingList={this.state.masterFundingList}/>} />
          <Route component={Error404}/>         
        </Switch>
        <Footer/>
        <style global jsx>{`
        .container{
          margin-right: 95%
          margin-left: 95%
        }  
        body{
            font-family: monospace;
          }
          `}
        </style>
      </div>
    );
  }
}
export default App;
