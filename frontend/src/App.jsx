import { BrowserRouter, Route, Routes } from "react-router-dom";

import BookRide from "./pages/BookRide";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Notifications from "./pages/Notifications";
import Register from "./pages/Register";
import RideHistory from "./pages/RideHistory";

function App() {

return (

<BrowserRouter>

<Routes>

<Route path="/" element={<Login />} />

<Route path="/admin" element={<Admin />} />

<Route path="/register" element={<Register />} />

<Route path="/home" element={<Home />} />

<Route path="/book" element={<BookRide />} />

<Route path="/history" element={<RideHistory />} />

<Route path="/notifications" element={<Notifications />} />

</Routes>

</BrowserRouter>

);

}

export default App;