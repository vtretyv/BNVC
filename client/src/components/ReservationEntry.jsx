import React from 'react';

class ReservationEntry extends React.Component {
	constructor(props) {
		super(props)

	}

	render() {
			return (<div key={this.props.reservation.time}>
              Reservation Time:{this.props.reservation.time}<br/>
              Party Size: {this.props.reservation.people}
              <button>Accept</button>
            </div>);
	}
}

export default ReservationEntry