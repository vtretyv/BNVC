import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search.jsx';
import sampleData from '../../sampleData/sampleData.js';

//data is here
const restaurantData = sampleData.massagedDataOP;




class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        data: restaurantData,
      }    
  }
  

  //bind any handlers here

  render() {
    return (
      <div>
        <Search restaurantData={this.state.data}/>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));