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
        times: ['7:00pm', '7:30pm', '8:00pm', '8:30pm', '9:00pm'],
        partySizes: [1, 2, 3, 4,, 5, 6],
        categories: ["Chinese", "Italian", "American", "French", "Thai"],
        reservations: []
      }    
  }

  componentWillMount() {
    var self = this;
    axios.get('/data')
    .then( res => {
      self.setState({
        data: res.data,
        timeFilter: this.state.times[0],
        partyFilter: this.state.partySizes[0],
        categoryFilter: this.state.categories[0]
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
  


  onPhoneNumberSubmitClick() {
    //populate my reservation list
  }

  onRestaurantSubmitClick() {
    // populate available restaurants
  }

  onFilterSubmitClick() {
    // filter avaiable restaurants
  }

  onAcceptClick() {
    // send data to db and repopulate my reservation list
  }

  onCancelClick() {
    // send data to bd and repopulate my reservation list
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
                initializeFilters={this.initializeFilters.bind(this)}
                times={this.state.times}
                partySizes={this.state.partySizes}
                categories={this.state.categories} />

        <AvailableReservations restaurantData={this.state.data}/>
        //reservation list for phone number
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));