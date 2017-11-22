import React from 'react';
import moment from 'moment';

class ReservationEntry extends React.Component {
	constructor(props) {
		super(props)



	}


	render() {
		console.log('TIME', moment(this.props.reservation.time).format('LT'), this.props.time)
				console.log('PARTY', this.props.reservation.people, this.props.party)
			return ( (moment(this.props.reservation.time).format('LT') !== this.props.time && this.props.reservation.people.toString() !== this.props.party) ? 
														<div key={this.props.reservation.time}>
			              Reservation Time:{moment(this.props.reservation.time).format('LT')}<br/>
			              Party Size: {this.props.reservation.people}
			              <button>Accept</button>
			            </div> : <div></div>);
	}
}

export default ReservationEntry