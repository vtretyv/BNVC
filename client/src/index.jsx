import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search.jsx';
import sampleData from '../../sampleData/sampleData.js';
import AvailableReservations from './components/AvailableReservations.jsx';
import axios from 'axios';
import _ from 'underscore';
import moment from 'moment';
//data is here

class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        data: [],
        phoneNumber: '',
        restaurant: '',
        city: '',
        timeFilter: 'All',
        partyFilter: 'All',
        categoryFilter: 'All',
        times: [],
        partySizes: [],
        categories: [],
        reservations: []
      }    
  }

  componentWillMount() {
    var self = this;
    axios.get('/data')
    .then( res => {

      var timeData = {};
      var partySizeData = {};
      var categoryData = {};

      // Funnels all data into a coresponding object to remove duplicates
      // found
      _.forEach(res.data, restaurant => {

        _.forEach(restaurant.times, time => {
          timeData[moment(time).format('LT')] = time;
        })

        _.forEach(restaurant.partySizes, size => {
          partySizeData[size] = size
        })

        _.forEach(restaurant.categories, cat => {
          categoryData[cat] = cat;
        })

      })

      timeData = ['ALL'].concat(Object.keys(timeData));
      partySizeData = ['ALL'].concat(Object.keys(partySizeData));
      categoryData = ['ALL'].concat(Object.keys(categoryData));

      // Sets state to 
      self.setState({
        data: res.data,
        times: timeData,
        partySizes: partySizeData,
        categories: categoryData
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