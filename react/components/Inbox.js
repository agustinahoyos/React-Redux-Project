import React from 'react';
import Message from './Message';
import store from '../redux/store';

export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            messagesLoading: false
        }
    }

    render() {
        return (
            <div>
                
                <h1>Inbox</h1>
                {this.state.messages.map(e => {
                    return <Message fullMessage = {e} ></Message>
    })}
            </div>
        );
    }

}
