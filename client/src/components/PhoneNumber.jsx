import React from 'react';

class PhoneNumber extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return(<div>
              Phone #:<input type="text" 
                             name="phoneNumber" 
                             value={this.props.phoneNumber}
                             onChange={this.props.onStateChange} />
              <button>Submit</button>
            </div>);
  }
}


export default PhoneNumber;