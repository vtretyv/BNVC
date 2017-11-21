import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search.jsx';
import sampleData from '../../sampleData/sampleData.js';
import AvailableReservations from './components/AvailableReservations.jsx';

//data is here
const restaurantData = sampleData.massagedDataOP;


class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        data: restaurantData,
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
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));