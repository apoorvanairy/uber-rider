import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(){

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const navigate = useNavigate();

const handleLogin = (e)=>{
e.preventDefault();

if(email && password){
alert("Login Successful");
navigate("/home");
}else{
alert("Please enter email and password");
}

};

return(

<div className="container">

<div className="card">

<h1>🚖 Uber Rider</h1>
<p>Book rides quickly and travel anywhere</p>

<h2>Login</h2>

<form onSubmit={handleLogin}>

<input
type="email"
placeholder="Enter Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Enter Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<button type="submit">Login</button>

</form>

<p style={{marginTop:"15px"}}>
New user? <a href="/register">Register here</a>
</p>

</div>

</div>

);

}

export default Login;