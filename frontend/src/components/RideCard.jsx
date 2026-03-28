function RideCard({ pickup, drop }) {
  return (
    <div style={{border: "1px solid #ccc", padding: "10px", margin: "10px"}}>
      <h3>Ride Details</h3>
      <p><strong>Pickup:</strong> {pickup}</p>
      <p><strong>Drop:</strong> {drop}</p>
    </div>
  );
}

export default RideCard;