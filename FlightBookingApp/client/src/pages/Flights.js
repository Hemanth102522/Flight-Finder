import React, { useEffect, useState } from "react";
import axios from "axios";

function Flights() {

const [flights,setFlights] = useState([]);

// Fetch flights from backend
useEffect(()=>{

axios.get("http://localhost:6001/api/flights/all")
.then(res => {
setFlights(res.data);
})
.catch(err=>{
console.log(err);
});

},[]);


// BOOK FLIGHT FUNCTION
const bookFlight = async (flightId) => {

try{

await axios.post("http://localhost:6001/api/bookings/book",{

flightId: flightId,
userId: "demoUser"

});

alert("Flight Booked Successfully");

}catch(err){

console.log(err);
alert("Booking Failed");

}

};


return(

<div className="container mt-5">

<h2>Available Flights</h2>

<div className="row mt-4">

{flights.map((flight,index)=>{

return(

<div className="col-md-4" key={index}>

<div className="card p-3 mb-3">

<h5>{flight.flightName}</h5>

<p>From: {flight.origin}</p>

<p>To: {flight.destination}</p>

<p>Price: ₹{flight.basePrice}</p>

<button
className="btn btn-primary"
onClick={()=>bookFlight(flight._id)}
>
Book Flight
</button>

</div>

</div>

)

})}

</div>

</div>

)

}

export default Flights;