import React from "react";
import { Link } from "react-router-dom";
import { MessageCircle, Smile } from "lucide-react"; // ✅ nice clean icons

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-blue-50 to-indigo-200">
      {/* Glass card */}
      <div className="backdrop-blur-lg bg-white/40 border border-white/30 rounded-3xl shadow-2xl p-12 max-w-2xl text-center">
        <h1 className="text-6xl font-extrabold text-indigo-800 drop-shadow mb-6">
          🌿 Serene Mental
        </h1>
        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          Your AI-powered mental health companion.  
          Chat with our supportive bot, track your moods, and grow towards a healthier mind.
        </p>

        {/* Buttons */}
        <div className="flex gap-6 justify-center">
          <Link
            to="/chatbot"
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 transition text-white px-6 py-3 rounded-2xl shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            Start Chatting
          </Link>
          <Link
            to="/mood-tracker"
            className="flex items-center gap-2 bg-white/60 hover:bg-white/80 transition px-6 py-3 rounded-2xl shadow-lg text-indigo-800"
          >
            <Smile className="w-5 h-5" />
            Track Mood
          </Link>
        </div>
      </div>
    </div>
  );
}

