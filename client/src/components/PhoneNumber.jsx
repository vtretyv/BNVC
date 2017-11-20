import React from 'react';

const PhoneNumber = (props) =>{
  return (
    <div>
     <form>
        <label>
           Phone Number:
          <input type="text" name="phonenumber" />
        </label>
          <input type="submit" value="Submit" />
      </form> 
    </div>
  );
}

export default PhoneNumber;