import React from 'react';

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Hello World',
    };
  }
  
  render() {
    return (
      <React.Fragment>
        <div>
          <p>{this.state.text}</p>
        </div>
      </React.Fragment>
    );
  }
}

export default Message;
