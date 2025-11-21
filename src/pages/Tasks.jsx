import React from "react";
import { FaBrain, FaListAlt, FaFileAlt } from "react-icons/fa";

export default function Tasks() {
  const tasks = [
    {
      name: "Intent Classification",
      description:
        "Classify user intents in text using optimized NLP models for edge devices.",
      icon: <FaBrain className="text-cyan-500 text-3xl" />,
    },
    {
      name: "Named Entity Recognition (NER)",
      description:
        "Detect entities like names, locations, and organizations from text.",
      icon: <FaListAlt className="text-cyan-500 text-3xl" />,
    },
    {
      name: "Summarization",
      description:
        "Generate concise summaries from long text documents in real-time.",
      icon: <FaFileAlt className="text-cyan-500 text-3xl" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10 text-center">
        Choose Your NLP Task
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <div className="mb-4">{task.icon}</div>
            <h2 className="text-2xl font-semibold mb-2">{task.name}</h2>
            <p className="text-gray-600">{task.description}</p>
            <button
              className="mt-6 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-5 py-3 rounded-xl transition transform hover:scale-105"
              onClick={() => alert(`You clicked ${task.name}`)}
            >
              Start
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
