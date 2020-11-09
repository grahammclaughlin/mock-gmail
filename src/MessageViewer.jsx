import React from 'react';

function MessageViewer(props){
    return (
        <div hidden={props.hide}>
            <button onClick={props.backToInbox}>Back To Inbox</button>
            {props.currentEmail ? 
            <table>
                <tr>
                    <td>
                        Sender:
                    </td>
                    <td>
                        {props.currentEmail.sender}
                    </td>
                </tr>
                <tr>
                    <td>
                        Subject: 
                    </td>
                    <td>
                        {props.currentEmail.subject}
                    </td>
                </tr>
                <tr>
                    <td>
                        Date: 
                    </td>
                    <td>
                        {props.currentEmail.date}
                    </td>
                </tr>
                <tr>
                    <td>
                        Message:
                    </td>
                    <td>
                        {props.currentEmail.message}
                    </td>
                </tr>
            </table>
            : ''}

        </div>

    )
}

export default MessageViewer;