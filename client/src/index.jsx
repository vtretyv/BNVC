import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search.jsx';
import sampleData from '../../sampleData/sampleData.js';
import AvailableReservations from './components/AvailableReservations.jsx';
import axios from 'axios';

//data is here

class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        data: [],
        phoneNumber: '',
        restaurant: '',
        city: '',
        timeFilter: '',
        partyFilter: '',
        categoryFilter: '',
        reservations: []
      }    
  }

  componentWillMount() {
    var self = this;
    axios.get('/data')
    .then( res => {
      self.setState({
        data: res.data
      })
    }).catch( err => {
      throw err;
    })
  }

  initializeFilters(time, party, cat) {
    this.setState({
      timeFilter: time,
      partyFilter: party,
      categoryFilter: cat
    })
  }

  onStateChange(e) {
    this.setState({ [e.target.name]: e.target.value}, () => {
      console.log(this.state);
    })
  }
  

  render() {
    return (
      <div>
        <Search restaurantData={this.state.data}
                onStateChange={this.onStateChange.bind(this)} 
                phoneNumber={this.state.phoneNumber} 
                restaurant={this.state.restaurant} 
                city={this.state.city} 
                timeFilter={this.state.timeFilter}
                partyFilter={this.state.partyFilter}
                categoryFilter={this.state.categoryFilter} 
                initializeFilters={this.initializeFilters.bind(this)}/>

        <AvailableReservations restaurantData={this.state.data}/>
        //reservation list fo phone number
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));