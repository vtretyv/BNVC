import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
  }
  //set state here

  //bind any handlers here

  render() {
    return (
      <div>
        <Search/>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));