import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import _ from 'underscore';
import Search from './components/Search.jsx';
import AvailableReservations from './components/AvailableReservations.jsx';
import Myreservations from './components/Myreservations.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      times: [],
      partySizes: [],
      categories: [],
      myReservations: [1, 2, 3, 4, 5],
      // filter: true,
      time: 'All',
      party: 'All',
      category: 'All',
    };
    this.onAcceptClick = this.onAcceptClick.bind(this);
    this.onFilterSubmitClick = this.onFilterSubmitClick.bind(this);
    this.onPhoneNumberSubmitClick = this.onPhoneNumberSubmitClick.bind(this);
    this.onCitySubmitClick = this.onCitySubmitClick.bind(this);
  }

  componentWillMount() {
    const self = this;
    axios.get('/data')
      .then((res) => {
        let timeData = {};
        let partySizeData = {};
        let categoryData = {};

        // Funnels all data into a coresponding object to remove duplicates
        // found
        _.forEach(res.data, (restaurant) => {
          _.forEach(restaurant.times, (time) => {
            timeData[time] = time;
          });

          _.forEach(restaurant.partySizes, (size) => {
            partySizeData[size] = size;
          });

          _.forEach(restaurant.categories, (cat) => {
            categoryData[cat] = cat;
          });
        });

        timeData = ['All'].concat(Object.keys(timeData));
        partySizeData = ['All'].concat(Object.keys(partySizeData));
        categoryData = ['All'].concat(Object.keys(categoryData));

        // Sets state to
        self.setState({
          data: res.data,
          times: timeData,
          partySizes: partySizeData,
          categories: categoryData,
        });
      }).catch((err) => {
        throw err;
      });
  }


  onStateChange(e) {
    this.setState({ [e.target.name]: e.target.value }, () => {
      console.log(this.state);
    });
  }

  onPhoneNumberSubmitClick(phoneNumber) {
    console.log(phoneNumber);
    // query db for reservations with this phone number
  }

  onCitySubmitClick(restaurant, city) {
    console.log(restaurant, city);
    const self = this;
    axios.post('data/city', {city: city})
      .then((res) => {
        self.setState({
          data: res.data
        });
      })
      .catch((err) => {
        throw err;
      });

    // use api to retrieve new data for the city or restaurant
  }

  onFilterSubmitClick(time, party, category) {
    // filter avaiable restaurants
    this.setState({
      time,
      party,
      category,
    });

    // console.log(time, party, category);
  }


  onAcceptClick() {
    // send data to db and repopulate my reservation list
  }

  onCancelClick() {
    // send data to bd and repopulate my reservation list
  }

  filterData() {
    // console.log(this.state.data);

    // Object used to simplify the filtering process
    // Keys are properties located on each restaurant object
    // recieved from server
    // Values are the search by terms provided by the user

    const filters = {
      times: this.state.time,
      partySizes: this.state.party === 'All' ? 'All' : Number(this.state.party),
      categories: this.state.category,
    };

    let filteredData = this.state.data.slice(0);
    // console.log('FILTERED DATA BEFORE ', filteredData);

    _.forEach(filters, (filter, key) => {
      // console.log(filter);
      if (filter !== 'All') {
        filteredData = _.filter(filteredData, restaurant =>
          restaurant[key].includes(filter));
      }
    });

    // console.log('filtered Data after', filteredData);
    return filteredData;
  }

  render() {
    return (
      <div>
        <Search
          times={this.state.times}
          partySizes={this.state.partySizes}
          categories={this.state.categories}
          onPhoneNumberSubmitClick={this.onPhoneNumberSubmitClick}
          onCitySubmitClick={this.onCitySubmitClick}
          onFilterSubmitClick={this.onFilterSubmitClick}
        />
        <div className="main">
          <AvailableReservations
            restaurantData={this.filterData()}
            onAcceptClick={this.onAcceptClick}
            time={this.state.time}
            party={this.state.party}
          />
          <Myreservations reservations={this.state.myReservations} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
