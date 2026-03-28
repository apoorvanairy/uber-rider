import { useState } from "react";

function BookRide(){

const [pickup,setPickup] = useState("");
const [drop,setDrop] = useState("");

const handleBookRide = (e)=>{
e.preventDefault();

const ride = {
pickup,
drop
};

let rides = JSON.parse(localStorage.getItem("rides")) || [];
rides.push(ride);

localStorage.setItem("rides", JSON.stringify(rides));

/* notification part */
let notifications = JSON.parse(localStorage.getItem("notifications")) || [];

notifications.push({
message: "Ride booked successfully",
time: new Date().toLocaleString()
});

localStorage.setItem("notifications", JSON.stringify(notifications));

alert("Ride booked successfully");

setPickup("");
setDrop("");
};

return(

<div className="container">

<div className="card">

<h2>Book a Ride</h2>

<input
placeholder="Pickup Location"
value={pickup}
onChange={(e)=>setPickup(e.target.value)}
/>

<input
placeholder="Drop Location"
value={drop}
onChange={(e)=>setDrop(e.target.value)}
/>

<button onClick={handleBookRide}>Book Ride</button>

</div>

</div>

);

}

export default BookRide;