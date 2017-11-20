import React from 'react';
import ReservationList from './ReservationList.jsx';

class AvailableReservations extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        Available Reservations
        <ReservationList restaurantData={this.props.restaurantData}/>
      </div>
    )
  }
}

export default AvailableReservations;

