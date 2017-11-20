import React from 'react';
import PhoneNumber from './PhoneNumber.jsx';
import Restaurant from './Restaurant.jsx';
import FilterMenu from './FilterMenu.jsx';
import AvailableReservations from './AvailableReservations.jsx';


class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
       <PhoneNumber/>
        <br/>
       <Restaurant/>
        <br/>
       <FilterMenu/>
        <br/>
       <AvailableReservations restaurantData={this.props.restaurantData}/>
      </div>
    );
  }
}

export default Search;

//Todo make search functional