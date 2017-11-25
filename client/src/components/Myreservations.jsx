import React from 'react';
import Myreservation from './Myreservation.jsx';

class Myreservations extends React.Component {
  constructor(props) {
    super(props);
  };


  render() {
    return (
      <div className="myReservations">
      My Reservations
      {this.props.reservations.map((reservation, idx) => {
        return (<Myreservation reservation={reservation} key={idx} />);
      })}
      </div>);
  }
}

export default Myreservations;