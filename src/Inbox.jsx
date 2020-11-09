import React from 'react';

class Inbox extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            searchFilter: '',
        }
    }
    
    search(e){
        this.setState({
            searchFilter: e.target.value,
        })
    }

    render(){
        return(
            <div hidden={this.props.hide}>
                <input type='text' placeholder='Search Messages' onChange={this.search.bind(this)}></input>
                <table >
                    <thead>
                        <tr>
                            <td>
                                Sender
                            </td>
                            <td>
                                Subject
                            </td>
                            <td>
                                Date
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.emails ? (
                            this.props.emails
                            .filter(email => 
                                (email.subject.toLowerCase().includes(this.state.searchFilter.toLowerCase()) || 
                                email.message.toLowerCase().includes(this.state.searchFilter.toLowerCase()) || 
                                email.sender.toLowerCase().includes(this.state.searchFilter.toLowerCase())
                            ))
                            .map(email => 
                            <tr onClick={this.props.onMessageSelect} emailid={email.id}>
                                <td>
                                    {email.sender}
                                </td>
                                <td>
                                    {email.subject}
                                </td>
                                <td>
                                    {email.date}
                                </td>
                            </tr>    
                            )
                        ) : ''}
                        
                    </tbody>
                </table>
            </div>
        );
    }

}

export default Inbox;