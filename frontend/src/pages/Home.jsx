import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home(){

const navigate = useNavigate();
const [count,setCount] = useState(0);

useEffect(()=>{

const notifications = JSON.parse(localStorage.getItem("notifications")) || [];
setCount(notifications.length);

},[]);

return(

<div className="container">

<div className="card">

<h1>Welcome back 👋</h1>

<button onClick={()=>navigate("/book")}>
Book New Ride
</button>

<button onClick={()=>navigate("/history")}>
View Previous Rides
</button>

<button onClick={()=>navigate("/notifications")} style={{position:"relative"}}>

Notifications

{count > 0 && (

<span style={{
position:"absolute",
top:"-5px",
right:"-5px",
background:"red",
color:"white",
borderRadius:"50%",
padding:"4px 8px",
fontSize:"12px"
}}>
{count}
</span>

)}

</button>

</div>

</div>

);

}

export default Home;