import React from 'react'
import ReservationEntry from './ReservationEntry.jsx'

class RestaurantEntry extends React.Component {
	constructor(props) {
		super(props)

	}

	render() {
		return (<div>
	          <div>{this.props.restaurant.name}</div>
	          <img width="210px" height="170px" src={this.props.restaurant.image_url}/>
	          {this.props.restaurant.reservations.map( (res, idx) => {
	          		return <ReservationEntry key={idx} reservation={res}/>
	          })} 
        		</div>);
	}
}

export default RestaurantEntry;
