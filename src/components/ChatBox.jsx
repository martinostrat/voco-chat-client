import React, { Component } from 'react';


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
                <div className="container box">
                    <div className="row col-md-12 col-sm-12 chat-feed">
                        <div className="col-md-12 col-sm-12">
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
                        </div>
                    </div>

                    <div className="row message-area">
                        <div className="col-md-3 col-sm-3 username-wrapper">
                            <input
                                    type='text'
                                    id="username-input"
                                    value={this.state.user}
                                    onChange={this.handleChange}
                                    onBlur={e => this.updateInput('user', e.target.value)}
                            />
                        </div>
                        <div className="col-md-9 col-sm-9 message-wrapper">
                            <input
                                    type="text"
                                    id="message-input"
                                    placeholder="Type something..."
                                    value={this.state.message}
                                    onChange={e => this.updateInput('message', e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="row col-md-12 col-sm-12 btn-row">
                        <button
                            onClick={() => this.sendMessage()}
                            className='send-btn btn'
                        >
                            Send
                        </button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}