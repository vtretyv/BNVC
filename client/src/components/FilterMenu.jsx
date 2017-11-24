import React from 'react';
import PropTypes from 'prop-types';

class FilterMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      partyFilter: 'All',
      timeFilter: 'All',
      categoryFilter: 'All',
    };

    this.onStateChange = this.onStateChange.bind(this);
  }

  onStateChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <div>
        Select Your Desired Time
        <select onChange={this.onStateChange} name="timeFilter">
          {this.props.times.map(time =>
            <option key={time} value={time}>{time}</option>)}
        </select>

        Select Your Party Size
        <select onChange={this.onStateChange} name="partyFilter">
          {this.props.partySizes.map(size =>
            <option key={size} value={size}>{size}</option>)}
        </select>

        Select Your Food Category
        <select onChange={this.onStateChange} name="categoryFilter">
          {this.props.categories.map(category =>
            <option key={category} value={category}>{category}</option>)}
        </select>

        <button onClick={() => {
          this.props.onFilterSubmitClick(
            this.state.timeFilter,
            this.state.partyFilter,
            this.state.categoryFilter,
            );
        }}
        >Submit
        </button>
      </div>
    );
  }
}

export default FilterMenu;

FilterMenu.propTypes = {
  times: PropTypes.arrayOf(PropTypes.string).isRequired,
  partySizes: PropTypes.arrayOf(PropTypes.string).isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  onFilterSubmitClick: PropTypes.func.isRequired,
};
