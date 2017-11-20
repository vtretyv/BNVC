import React from 'react';
//import PartySize from './PartySize.jsx';
//import Category from './Category.jsx';

class FilterMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'one'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('You selected ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <label>
          Select Your Desired Time
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="7:00pm">7:00pm</option>
            <option value="7:30pm">7:30pm</option>
            <option value="8:00pm">8:00pm</option>
            <option value="8:30pm">8:30pm</option>
            <option value="9:00pm">9:00pm</option>
          </select>
        </label>
        <label>
          Select Your Party Size
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="one">One</option>
            <option value="two">Two</option>
            <option value="three">Three</option>
            <option value="four">Four</option>
            <option value="five">Five</option>
          </select>
        </label>
        <label>
        Select Your Food Category
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="Chinese">Chinese</option>
          <option value="Italian">Italian</option>
          <option value="American">American</option>
          <option value="French">French</option>
          <option value="Thai">Thai</option>
        </select>
        </label>
        <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

export default FilterMenu;