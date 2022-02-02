import React, { Component } from 'react';
import { ChatBubble } from './ChatBubble';


export class ChatBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: '',

        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({message: e.target.value});
      }

    handleSubmit(e) {
        alert('An essay was submitted: ' + this.state.message);
        this.setState({message: e.target.value})
        e.preventDefault();
    }


    render() {
        return(
            <React.Fragment>
                <div className="box">
                    {/* TODO: get senderName from messageAreaUser */}
                    <ChatBubble
                    sentMessage={this.state.message}
                    senderName="martin" 
                    sentDate={new Date()}

                     />
                    

                    {/* message box */}
                    <div className="messageArea">
                        <div className="row messageAreaRow">
                            <div className="messageAreaUser col-3">
                                <span>Martin</span>
                            </div>
                            <div className="messageAreaMessage col-9">
                                <form id="message-box" onSubmit={this.handleSubmit}>
                                    <textarea className="messageTextField" value={ this.state.message } onChange={this.handleChange} placeholder="Type something..." />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row btnRow">
                    <button form="message-box" type="submit" className="subBtn">Send</button>
                </div>
            </React.Fragment>
        );
    }
}