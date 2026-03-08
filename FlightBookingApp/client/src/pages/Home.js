import { useNavigate } from "react-router-dom";
import React from "react";

function Home() {
    const navigate = useNavigate();

return (

<div className="container mt-5">

<h1 className="text-center">
Embark on an Extraordinary Flight Booking Adventure!
</h1>

<p className="text-center">
Search flights, compare prices and book your dream journey.
</p>

<div className="card p-4 mt-4 shadow">

<div className="row">

<div className="col-md-3">
<select className="form-control">
<option>Departure City</option>
<option>Hyderabad</option>
<option>Chennai</option>
<option>Delhi</option>
</select>
</div>

<div className="col-md-3">
<select className="form-control">
<option>Destination City</option>
<option>Bangalore</option>
<option>Mumbai</option>
<option>Kolkata</option>
</select>
</div>

<div className="col-md-3">
<input type="date" className="form-control"/>
</div>

<div className="col-md-3">
<button
className="btn btn-primary w-100"
onClick={()=>navigate("/flights")}
>
Search
</button>
</div>

</div>

</div>

</div>

)

}

export default Home;