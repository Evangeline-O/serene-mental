// src/components/Layout.jsx
import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="bg-indigo-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Serene Mental</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/mood" className="hover:underline">Mood Tracker</Link>
          <Link to="/chat" className="hover:underline">Chatbot</Link>
          <Link to="/resources" className="hover:underline">Resources</Link>
          <Link to="/forum" className="hover:underline">Forum</Link>
          <Link to="/help" className="hover:underline">Help</Link>
        </div>
      </nav>

      {/* Page Content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-center p-4 text-sm text-gray-600">
        © {new Date().getFullYear()} Serene Mental. All rights reserved.
      </footer>
    </div>
  );
}
