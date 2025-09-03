import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Chatbot from "./pages/Chatbot.jsx";
import MoodTracker from "./pages/MoodTracker.jsx";


export default function App() {
  return (
    <Router>
      <nav className="bg-indigo-600 text-white p-4 flex justify-between">
        <h1 className="font-bold text-lg">Serene Mental</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/chatbot" className="hover:underline">Chatbot</Link>
          <Link to="/mood-tracker" className="hover:underline">Mood Tracker</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/mood-tracker" element={<MoodTracker />} />
      </Routes>
    </Router>
  );
}
