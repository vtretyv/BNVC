import React from 'react';

const ReservationList = (props) =>{
  return (
    <div>
      {props.restaurantData.map((restaurant) =>
        <ul key={restaurant.id}>
          {restaurant.name}<br/>
          <img src={restaurant.image_url}/>
          {restaurant.reservations.map((reservation) =>
            <div key={reservation.time}>
              Reservation Time:{reservation.time}<br/>
              Party Size: {reservation.people}
            </div>
          )}
          
        </ul>

      )}
    </div>
  );
}

export default ReservationList;

{/* function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  ); */}