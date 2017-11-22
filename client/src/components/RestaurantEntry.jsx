import React from 'react'
import ReservationEntry from './ReservationEntry.jsx';
import moment from 'moment';

class RestaurantEntry extends React.Component {
	constructor(props) {
		super(props)

	}

	render() {
		return (<div>
	          <div>{this.props.restaurant.name}</div>
	          <img width="210px" height="170px" src={this.props.restaurant.image_url}/>
	          {this.props.restaurant.reservations.map( (res, idx) => {

	          	return (<div>{ (moment(res.time).format('LT') === this.props.time || this.props.time === 'All')
			                 && (res.people.toString() === this.props.party || this.props.party === 'All')
			                 && <ReservationEntry key={idx} reservation={res}/>
			                }</div>);
	          		
	          })} 
        		</div>);
	}
}

export default RestaurantEntry;
