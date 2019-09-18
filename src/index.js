import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Message />
      </React.Fragment>
    );
  }
}

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

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
export default Message;
