import React, { useState } from "react";
import axios from "axios";

function Login() {

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const login = async () => {

await axios.post("http://localhost:6001/api/auth/login",{
email,
password
});

alert("Login Request Sent");

}

return (

<div className="container mt-5">

<h2>Login</h2>

<input
className="form-control mt-3"
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
className="form-control mt-3"
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<button
className="btn btn-success mt-3"
onClick={login}
>
Login
</button>

</div>

)

}

export default Login;