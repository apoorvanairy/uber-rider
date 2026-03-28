import { useEffect, useState } from "react";

function Notifications(){

const [notifications,setNotifications] = useState([]);

useEffect(()=>{

const data = JSON.parse(localStorage.getItem("notifications")) || [];
setNotifications(data);

},[]);

return(

<div className="container">

<div className="card">

<h2>Notifications</h2>

{notifications.length === 0 && <p>No notifications</p>}

{notifications.map((n,index)=>(
<p key={index}>
🔔 {n.message}
<br/>
<small>{n.time}</small>
</p>
))}

</div>

</div>

);

}

export default Notifications;