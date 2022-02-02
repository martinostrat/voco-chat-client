import React, { Component } from 'react';
import { ChatBox } from './ChatBox';

export class ChatBubble extends Component {

    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return(
            <div className="chatBubble">
                <div className="bubble">
                    <div className="bubbleText">{ this.props.sentMessage }</div>
                    <div className="bubbleTextSenderInfo">
                        <span className="bubbleTextSenderName">{ this.props.senderName }</span>
                        <span className="bubbleTextDateTime">{ this.props.sentDate.toString() }</span>
                    </div>
                </div>
            </div>
        )
    }
}