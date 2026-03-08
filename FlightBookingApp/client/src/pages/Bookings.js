import React, { useEffect, useState } from "react";
import axios from "axios";

function Bookings() {

const [bookings,setBookings] = useState([]);

useEffect(()=>{

axios.get("http://localhost:6001/api/bookings/all")
.then(res=>{
setBookings(res.data);
})
.catch(err=>{
console.log(err);
});

},[]);


// CANCEL BOOKING FUNCTION
const cancelBooking = async (id) => {

try{

await axios.delete(`http://localhost:6001/api/bookings/cancel/${id}`);

alert("Booking Cancelled");

// refresh bookings list
window.location.reload();

}catch(err){

console.log(err);
alert("Cancel Failed");

}

};


return(

<div className="container mt-5">

<h2>My Bookings</h2>

<div className="row">

{bookings.map((booking,index)=>{

return(

<div className="col-md-4" key={index}>

<div className="card p-3 mb-3">

<h5>Booking</h5>

<p><b>Booking ID:</b> {booking._id}</p>

<p><b>Flight:</b> {booking.flight?.flightName}</p>

<p><b>From:</b> {booking.flight?.origin}</p>

<p><b>To:</b> {booking.flight?.destination}</p>

<p><b>Price:</b> ₹{booking.flight?.basePrice}</p>

<p><b>Status:</b> Confirmed</p>

<p><b>User:</b> {booking.userId}</p>

<button
className="btn btn-danger"
onClick={()=>cancelBooking(booking._id)}
>
Cancel Ticket
</button>

</div>

</div>

)

})}

</div>

</div>

)

}

export default Bookings;