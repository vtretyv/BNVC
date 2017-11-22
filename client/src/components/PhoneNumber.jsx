import React from 'react';

class PhoneNumber extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      phoneNumber: ''
    }

    this.onStateChange = this.onStateChange.bind(this);

  }

  onStateChange(e) {
    this.setState({ [e.target.name]: e.target.value}, () => {
      //console.log(this.state);
    })
  }

  render() {
    return(<div>
              Phone #:<input type="text" 
                             name="phoneNumber" 
                             value={this.state.phoneNumber}
                             onChange={this.onStateChange} />
              <button onClick={() => { this.props.onPhoneNumberSubmitClick(this.state.phoneNumber) } }>Submit</button>
            </div>);
  }
}


export default PhoneNumber;