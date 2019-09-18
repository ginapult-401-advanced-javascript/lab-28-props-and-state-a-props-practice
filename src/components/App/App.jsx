import React from 'react';
import Message from '../Message/Message.jsx';

import '../../styles.scss';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Message />
      </React.Fragment>
    );
  }
}

export default App;