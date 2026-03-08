import React, { useState } from "react";
import axios from "axios";

function Admin() {

const [flightName,setFlightName] = useState("");
const [origin,setOrigin] = useState("");
const [destination,setDestination] = useState("");
const [basePrice,setBasePrice] = useState("");

const addFlight = async () => {

await axios.post("http://localhost:6001/api/flights/add",{

flightName,
origin,
destination,
basePrice

});

alert("Flight Added Successfully");

};

return(

<div className="container mt-5">

<h2>Add New Flight</h2>

<input
className="form-control mt-3"
placeholder="Flight Name"
onChange={(e)=>setFlightName(e.target.value)}
/>

<input
className="form-control mt-3"
placeholder="Departure City"
onChange={(e)=>setOrigin(e.target.value)}
/>

<input
className="form-control mt-3"
placeholder="Destination City"
onChange={(e)=>setDestination(e.target.value)}
/>

<input
className="form-control mt-3"
placeholder="Price"
onChange={(e)=>setBasePrice(e.target.value)}
/>

<button
className="btn btn-primary mt-4"
onClick={addFlight}
>
Add Flight
</button>

</div>

)

}

export default Admin;