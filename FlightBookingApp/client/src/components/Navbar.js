import React from "react";
import { Link } from "react-router-dom";

function Navbar(){

return(

<nav className="navbar navbar-expand-lg navbar-dark bg-primary">

<div className="container">

<Link className="navbar-brand" to="/">
SB Flights
</Link>

<div>

<Link className="btn btn-light me-2" to="/">
Home
</Link>

<Link className="btn btn-light me-2" to="/flights">
Flights
</Link>

<Link className="btn btn-light me-2" to="/bookings">
Bookings
</Link>

<Link className="btn btn-light me-2" to="/admin">
Admin
</Link>

<Link className="btn btn-light" to="/login">
Login
</Link>

</div>

</div>

</nav>

)

}

export default Navbar;