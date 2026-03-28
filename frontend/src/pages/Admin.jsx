import { useEffect, useState } from "react";

function Admin(){

const [rides,setRides] = useState([]);

useEffect(()=>{

const data = JSON.parse(localStorage.getItem("rides")) || [];
setRides(data);

},[]);

return(

<div className="container">

<div className="card">

<h2>Admin Dashboard</h2>

<h3>Total Rides: {rides.length}</h3>

{rides.map((ride,index)=>(
<p key={index}>
🚗 {ride.pickup} → {ride.drop}
</p>
))}

</div>

</div>

);

}

export default Admin;