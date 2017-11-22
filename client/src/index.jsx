import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search.jsx';
import sampleData from '../../sampleData/sampleData.js';
import AvailableReservations from './components/AvailableReservations.jsx';
import axios from 'axios';
import _ from 'underscore';


class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        data: [],
        times: [],
        partySizes: [],
        categories: [],
        reservations: [],
        filter: true,
        time: 'All',
        party: 'All',
        category: 'All'
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
          timeData[time] = time;
        })

        _.forEach(restaurant.partySizes, size => {
          partySizeData[size] = size
        })

        _.forEach(restaurant.categories, cat => {
          categoryData[cat] = cat;
        })

      })

      timeData = ['All'].concat(Object.keys(timeData));
      partySizeData = ['All'].concat(Object.keys(partySizeData));
      categoryData = ['All'].concat(Object.keys(categoryData));

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


  onStateChange(e) {
    this.setState({ [e.target.name]: e.target.value}, () => {
      console.log(this.state);
    })
  }
  


  onPhoneNumberSubmitClick(phoneNumber) {
    console.log(phoneNumber)

    // query db for reservations with this phone number

  }

  onRestaurantSubmitClick(restaurant, city) {
    console.log(restaurant, city);

    // use api to retrieve new data for the city or restaurant

  }

  onFilterSubmitClick(time, party, category) {
    // filter avaiable restaurants
    this.setState({
      time: time,
      party: party,
      category: category
    })

    console.log(time, party, category);
  }

  filterData() {
    console.log(this.state.data);

    // Object used to simplify the filtering process
    // Keys are properties located on each restaurant object
      // recieved from server
    // Values are the search by terms provided by the user

    var filters = {
      times: this.state.time,
      partySizes: this.state.party==='All' ? 'All' : Number(this.state.party),
      categories: this.state.category
    }

    var filteredData = this.state.data.slice(0);
    console.log('FILTERED DATA BEFORE ', filteredData);

    _.forEach(filters, (filter, key) => {
      console.log(filter);
      if(filter !== 'All') {
        filteredData = _.filter(filteredData, (restaurant) => {
          return (restaurant[key].includes(filter));
        })
      }
    });

    console.log('filtered Data after', filteredData)
    return filteredData

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
                times={this.state.times}
                partySizes={this.state.partySizes}
                categories={this.state.categories} 
                onPhoneNumberSubmitClick={this.onPhoneNumberSubmitClick.bind(this)} 
                onRestaurantSubmitClick={this.onRestaurantSubmitClick.bind(this)} 
                onFilterSubmitClick={this.onFilterSubmitClick.bind(this)} />

        <AvailableReservations restaurantData={this.filterData()} 
                               onAcceptClick={this.onAcceptClick.bind(this)}/>
        //reservation list for phone number
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));