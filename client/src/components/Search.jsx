import React from 'react';
import PhoneNumber from './PhoneNumber.jsx';
import Restaurant from './Restaurant.jsx';
import FilterMenu from './FilterMenu.jsx';


class Search extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
       <PhoneNumber/>
        <br/>
       <Restaurant/>
        <br/>
       <FilterMenu/>
      </div>
    );
  }
}

export default Search;