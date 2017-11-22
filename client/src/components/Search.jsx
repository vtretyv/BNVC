import React from 'react';
import PhoneNumber from './PhoneNumber.jsx';
import Restaurant from './Restaurant.jsx';
import FilterMenu from './FilterMenu.jsx';


class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
       <PhoneNumber onPhoneNumberSubmitClick={this.props.onPhoneNumberSubmitClick}/>
        <br/>
       <Restaurant onRestaurantSubmitClick={this.props.onRestaurantSubmitClick} />
        <br/>
       <FilterMenu times={this.props.times}
                   partySizes={this.props.partySizes}
                   categories={this.props.categories} 
                   onFilterSubmitClick={this.props.onFilterSubmitClick} />
        <br/>
      </div>
    );
  }
}

export default Search;

//Todo make search functional