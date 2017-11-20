import React from 'react';

const ReservationList = (props) =>{
  return (
    <div>
      {props.restaurantData.map((restaurant) =>
        <div key={restaurant.id}>
          {restaurant.name}<br/>
          <img src={restaurant.image_url}/>
        </div>

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