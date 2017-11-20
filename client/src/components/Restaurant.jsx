import React from 'react';

const Restaurant = (props) =>{
  return (
    <div>
     <form>
        <label>
           Restaurant:
          <input type="text" name="restaurant" />
        </label>
        <label>
           City:
          <input type="text" name="city" />
        </label>
          <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Restaurant;