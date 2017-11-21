import React from 'react';

class FilterMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'one',
      times: ['7:00pm', '7:30pm', '8:00pm', '8:30pm', '9:00pm'],
      partySizes: ['One', 'two', 'three', 'four', 'five', 'six'],
      categories: ["Chinese", "Italian", "American", "French", "Thai"]
    };

  }

  componentWillMount() {
    
  }

  componentDidMount() {
    this.props.initializeFilters(this.state.times[0], 
                                 this.state.partySizes[0], 
                                 this.state.categories[0]);
  }


  render() {
    return (
      <div>
        Select Your Desired Time
        <select onChange={this.props.onStateChange} name="timeFilter">
          {this.state.times.map( (time, idx) => {
            return <option key={idx} value={time}>{time}</option>
          })}
        </select>

        Select Your Party Size
        <select onChange={this.props.onStateChange} name="partyFilter">
          {this.state.partySizes.map( (size, idx) => {
            return <option key={idx} value={size}>{size}</option>
          })}
        </select>

        Select Your Food Category
        <select onChange={this.props.onStateChange} name="categoryFilter">
          {this.state.categories.map( (category, idx) => {
            return <option key={idx} value={category}>{category}</option>
          })}
        </select>

        <button>Submit</button>
      </div>
    );
  }
}

export default FilterMenu;