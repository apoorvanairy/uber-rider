import { useEffect, useState } from "react";

function RideHistory() {

  const [rides, setRides] = useState([]);

  useEffect(() => {

    const storedRides = JSON.parse(localStorage.getItem("rides")) || [];
    setRides(storedRides);

  }, []);

 return (

<div className="container">

<div className="card">

<h2>Your Ride History</h2>

{rides.map((ride,index)=>(
<p key={index}>
🚗 {ride.pickup} → {ride.drop}
</p>
))}

</div>

</div>

);

}

export default RideHistory;