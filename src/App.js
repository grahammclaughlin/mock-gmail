import React from 'react';
// import './App.css';
import Inbox from './Inbox';
import MessageViewer from './MessageViewer.jsx';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      emails: [],
      viewingMessage: false,
      currentEmail: [],
    }
  }
  
  async componentDidMount() {
    const response = await fetch(`http://localhost:3001/emails`);
    const json = await response.json();
    this.setState({emails: json});
  }

  onMessageSelect(e){
    let emailID = e.target.parentElement.getAttribute('emailid');
    emailID = parseInt(emailID)
    let email = this.state.emails.filter((element)=>element.id === emailID)[0]
    console.log(email)
    this.setState({
      viewingMessage: true,
      currentEmail: email,
    })
  }

  backToInbox(e){
    this.setState({
      viewingMessage: !this.state.viewingMessage,
      currentEmail: []
    })
  }
  
  render(){
    return( 
      <div className="">
        <Inbox 
          emails={this.state.emails} 
          hide={this.state.viewingMessage} 
          onMessageSelect={this.onMessageSelect.bind(this)}
        />
        <MessageViewer 
          hide={!this.state.viewingMessage}
          currentEmail={this.state.currentEmail} 
          backToInbox={this.backToInbox.bind(this)}
        />
      </div>)
  }
    

}

export default App;
