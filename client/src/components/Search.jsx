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
       <PhoneNumber onStateChange={this.props.onStateChange} 
                    phoneNumber={this.props.phoneNumber}/>
        <br/>
       <Restaurant onStateChange={this.props.onStateChange} 
                   restaurant={this.props.restaurant}
                   city={this.props.city} />
        <br/>
       <FilterMenu onStateChange={this.props.onStateChange} 
                   initializeFilters={this.props.initializeFilters} />
        <br/>
      </div>
    );
  }
}

export default Search;

//Todo make search functional