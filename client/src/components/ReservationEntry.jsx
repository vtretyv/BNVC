import React from 'react';
import moment from 'moment';

class ReservationEntry extends React.Component {
	constructor(props) {
		super(props)



	}


	render() {
			return (   <div key={this.props.reservation.time}>
		              Reservation Time:{moment(this.props.reservation.time).format('LT')}<br/>
		              Party Size: {this.props.reservation.people}
		              <button>Accept</button>
		            </div>);
	}
}

export default ReservationEntry