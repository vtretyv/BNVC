import React from 'react';
// import ReservationList from './ReservationList.jsx';
import RestaurantEntry from './RestaurantEntry.jsx';

class AvailableReservations extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        Available Reservations
        {this.props.restaurantData.map( (rest, idx) => {
          return <RestaurantEntry key={idx} restaurant={rest} />
        })}
      </div>
    )
  }
}

export default AvailableReservations;

