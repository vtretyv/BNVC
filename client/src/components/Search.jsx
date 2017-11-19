import React from 'react';


class Search extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <form>
        <label>
           Phone Number:
          <input type="text" name="phonenumber" />
        </label>
          <input type="submit" value="Submit" />
        </form>
        <form>
        <label>
           Restaurant:
          <input type="text" name="name" />
        </label>
        <label>
           City:
          <input type="text" name="name" />
        </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Search;