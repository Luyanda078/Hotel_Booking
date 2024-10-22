import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your Pages
import Home from './Pages/Home';
import Accommodations from './Pages/Accommodations';
import Booking from './Pages/Booking';
import Register from './Pages/Register';
import Login from './Pages/Login';
import UserProfile from './Pages/UserProfile'
import AdminPanel from './Pages/AdminPanel';
import Favorites from './Pages/Favourites';
import Newsletter from './Pages/Newsletter'; // Import Newsletter page
import Review from './Pages/Review'; // Import Review page

// Navigation Component
const Navbar = () => (
  <nav className="bg-gray-800 p-4 text-white">
    <ul className="flex space-x-4">
      <li><a href="/" className="hover:underline">Home</a></li>
      <li><a href="/accommodations" className="hover:underline">Accommodations</a></li>
      <li><a href="/booking" className="hover:underline">Booking</a></li>
      <li><a href="/register" className="hover:underline">Register</a></li>
      <li><a href="/login" className="hover:underline">Login</a></li>
      <li><a href="/profile" className="hover:underline">Profile</a></li>
      <li><a href="/admin" className="hover:underline">Admin Panel</a></li>
      <li><a href="/favorites" className="hover:underline">Favorites</a></li>
      <li><a href="/newsletter" className="hover:underline">Newsletter</a></li> {/* Add Newsletter link */}
      <li><a href="/review" className="hover:underline">Review</a></li> {/* Add Review link */}
    </ul>
  </nav>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accommodations" element={<Accommodations />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/newsletter" element={<Newsletter />} /> {/* Newsletter route */}
          <Route path="/review" element={<Review />} /> {/* Review route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
