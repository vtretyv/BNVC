import React from 'react';

class Restaurant extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (<div>
              Restaurant:<input type="text" 
                                name="restaurant" 
                                onChange={this.props.onStateChange}/>
              City:<input type="text" 
                          name="city" 
                          onChange={this.props.onStateChange} />
              <button>Submit</button>
            </div>);
  }
}


export default Restaurant;