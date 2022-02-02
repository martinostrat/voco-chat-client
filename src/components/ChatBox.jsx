import React, { Component } from 'react';
import { ChatBubble } from './ChatBubble';



export class ChatBox extends Component {
    

    constructor(props) {
        super(props);
        this.state = {
            message: '',
            messages: [],
            user: 'Guest1',
            dateTime: new Date().toString()
        }
    }

    updateTime() {
        let time = new Date().toString();
        this.setState({dateTime: time})
    }

    updateInput(key, value) {
        this.setState({ [key]: value })
    }

    sendMessage() {
        this.updateTime();

        const message = {
            id: 1 + Math.random(),
            value: this.state.message.slice(),
            userName: this.state.user,
            date: this.state.dateTime
        };

        const messages = [...this.state.messages];
        messages.push(message);

        this.setState({
            messages,
            message: ''
        });
    }

    handleChange = (e) => {
        this.setState({user: e.target.value});
      }

    render() {
        return(
            <React.Fragment>
                <div className="box">
                    {this.state.messages.map(message => {
                        return(
                            <div key={message.id} className="chatBubble">
                                <div className="bubble">
                                    <div className="bubbleText">{ message.value }</div>
                                    <div className="bubbleTextSenderInfo">
                                        <span className="bubbleTextSenderName">{message.userName}</span>
                                        <span className="bubbleTextDateTime">{message.date}</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                    <div className="messageArea">
                        <div className="row messageAreaRow">
                            <div className="messageAreaUser col-3">
                                <input
                                    type='text'
                                    value={this.state.user}
                                    onChange={this.handleChange}
                                    onBlur={e => this.updateInput('user', e.target.value)}
                                />
                            </div>
                            <div className="messageAreaMessage col-9">
                                <input
                                    type="text"
                                    placeholder="Type something..."
                                    value={this.state.message}
                                    onChange={e => this.updateInput('message', e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row btnRow">
                    <button
                        onClick={() => this.sendMessage()}
                        className='subBtn'
                    >
                        Send
                    </button>
                </div>
            </React.Fragment>
        );
    }
}