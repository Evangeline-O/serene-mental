import React, { useState } from "react";

const moodOptions = [
  { emoji: "😊", label: "Happy", color: "bg-yellow-100 text-yellow-700" },
  { emoji: "😢", label: "Sad", color: "bg-blue-100 text-blue-700" },
  { emoji: "😡", label: "Angry", color: "bg-red-100 text-red-700" },
  { emoji: "😌", label: "Calm", color: "bg-green-100 text-green-700" },
  { emoji: "😴", label: "Tired", color: "bg-purple-100 text-purple-700" },
];

export default function MoodTracker() {
  const [moods, setMoods] = useState([]);

  const addMood = (mood) => {
    setMoods([
      ...moods,
      { ...mood, date: new Date().toLocaleDateString() },
    ]);
  };

  return (
    <div className="max-w-xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-indigo-600 mb-6 text-center">
        📊 Mood Tracker
      </h2>
      <div className="flex flex-wrap gap-3 justify-center mb-6">
        {moodOptions.map((m, i) => (
          <button
            key={i}
            onClick={() => addMood(m)}
            className={`px-4 py-2 rounded-xl ${m.color} hover:opacity-90 transition`}
          >
            {m.emoji} {m.label}
          </button>
        ))}
      </div>
      <ul className="space-y-3">
        {moods.map((m, i) => (
          <li key={i} className="p-4 bg-white shadow rounded-xl flex justify-between items-center">
            <span className="font-medium">
              {m.emoji} {m.label}
            </span>
            <span className="text-sm text-gray-500">{m.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
