import React from 'react';

class FilterMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'one',
    };

  }

  
  render() {
    return (
      <div>
        Select Your Desired Time
        <select onChange={this.props.onStateChange} name="timeFilter">
          {this.props.times.map( (time, idx) => {
            return <option key={idx} value={time}>{time}</option>
          })}
        </select>

        Select Your Party Size
        <select onChange={this.props.onStateChange} name="partyFilter">
          {this.props.partySizes.map( (size, idx) => {
            return <option key={idx} value={size}>{size}</option>
          })}
        </select>

        Select Your Food Category
        <select onChange={this.props.onStateChange} name="categoryFilter">
          {this.props.categories.map( (category, idx) => {
            return <option key={idx} value={category}>{category}</option>
          })}
        </select>

        <button>Submit</button>
      </div>
    );
  }
}

export default FilterMenu;