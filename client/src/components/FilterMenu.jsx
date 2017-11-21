import React from 'react';

class FilterMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      partyFilter: 'All',
      timeFilter: 'All',
      categoryFilter: 'All'
    };

    this.onStateChange = this.onStateChange.bind(this);

  }

  onStateChange(e) {
    this.setState({ [e.target.name]: e.target.value}, () => {
      console.log(this.state);
    })
  }

  
  render() {
    return (
      <div>
        Select Your Desired Time
        <select onChange={this.onStateChange} name="timeFilter">
          {this.props.times.map( (time, idx) => {
            return <option key={idx} value={time}>{time}</option>
          })}
        </select>

        Select Your Party Size
        <select onChange={this.onStateChange} name="partyFilter">
          {this.props.partySizes.map( (size, idx) => {
            return <option key={idx} value={size}>{size}</option>
          })}
        </select>

        Select Your Food Category
        <select onChange={this.onStateChange} name="categoryFilter">
          {this.props.categories.map( (category, idx) => {
            return <option key={idx} value={category}>{category}</option>
          })}
        </select>

        <button onClick={() => { this.props.onFilterSubmitClick(this.state.timeFilter,
                                                                this.state.partyFilter,
                                                                this.state.categoryFilter) }} >Submit</button>
      </div>
    );
  }
}

export default FilterMenu;