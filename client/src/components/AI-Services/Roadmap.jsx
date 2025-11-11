import { Zap, Cpu } from 'lucide-react';
import React, { useState } from 'react';
import roadmaps from '../../assets/ChatGPT Image Nov 12, 2025, 12_48_33 AM.png'
// Gradient button component
const GradientButton = ({ text, Icon, onClick }) => (
  <button
    onClick={onClick}
    className="w-full flex justify-center items-center gap-2 bg-linear-to-r from-[#e18a58] to-[#f77031] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer hover:opacity-90 transition"
  >
    {Icon && <Icon className="w-5" />}
    {text}
  </button>
);

// Input field component
const TextInput = ({ label, placeholder, value, onChange }) => (
  <div className="mt-4">
    <p className="text-sm font-medium">{label}</p>
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300 text-gray-600"
    />
  </div>
);

// AI Roadmap Generator Form
const RoadmapForm = ({ topic, setTopic, onGenerate }) => (
  <div className="w-full max-w-lg p-6 bg-white rounded-lg border border-gray-200">
    <div className="flex items-center gap-3">
      <Zap className="w-6 text-[#00DA83]" />
      <h1 className="text-xl font-semibold">AI Roadmap Generator</h1>
    </div>

    <TextInput
      label="Enter AI Topic or Skill"
      placeholder="e.g., Machine Learning, NLP, Computer Vision"
      value={topic}
      onChange={(e) => setTopic(e.target.value)}
    />

    <GradientButton text="Generate Roadmap" Icon={Cpu} onClick={onGenerate} />
  </div>
);

// AI Roadmap Results Component
const RoadmapResults = ({ roadmap }) => (
  <div className="w-full max-w-lg p-6 bg-white rounded-lg flex flex-col border border-gray-200 max-h-[600px] min-h-96">
    <div className="flex items-center gap-3">
      <Cpu className="w-5 h-5 text-[#00DA83]" />
      <h1 className="text-xl font-semibold">Generated Roadmap</h1>
    </div>

    <div className="flex-1 overflow-y-auto mt-4">
      {roadmap ? (
        <ul className="list-decimal ml-5 text-gray-800 space-y-2">
          {roadmap.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      ) : (
        <div className="flex flex-col items-center justify-center h-full text-gray-400">
          <Cpu className="w-9 h-9 mb-2" />
          <p>Enter a topic and click "Generate Roadmap"</p>
        </div>
      )}
    </div>
  </div>
);

// Main Component
const AIRoadmapGenerator = () => {
  const [topic, setTopic] = useState('');
  const [roadmap, setRoadmap] = useState(null);

  const generateRoadmap = () => {
    if (!topic) return;

    // Mock AI-generated roadmap (replace with actual AI integration)
    const mockRoadmap = [
      `Introduction to ${topic}`,
      `Basics of ${topic} tools and frameworks`,
      `Core algorithms and techniques in ${topic}`,
      `Practical projects for ${topic}`,
      `Advanced topics and research in ${topic}`,
      `Deploying ${topic} solutions in real-world scenarios`,
    ];

    setRoadmap(mockRoadmap);
  };

  return (
<><div className="max-w-5xl mx-auto px-4 py-10"><br /><br />
  <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-blue-900 text-center">
    AI Roadmap Generator
  </h1>

  <img
    src={roadmaps} // replace with your roadmap banner image variable
    alt="AI Roadmap Generator"
    className="w-300 md:w-2/3 mx-auto rounded-2xl shadow-lg  md:h-90"
  />

  <div className="max-w-3xl mx-auto mt-10">
    <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">
      Overview
    </h2>

    <p className="text-slate-700 leading-relaxed text-base md:text-lg text-justify">
      The AI Roadmap Generator helps learners create a personalized step-by-step learning
      plan for Artificial Intelligence. Users just need to enter their current skill level
      and goals. The system automatically recommends topics to learn, project ideas,
      required tools, and estimated timelines. This makes AI learning structured and easier
      to follow.
    </p>

    <ul className="mt-8 space-y-3 text-slate-700 text-sm md:text-base list-disc list-inside">
      <li>Generates a personalized AI learning path</li>
      <li>Breaks learning into clear, manageable stages</li>
      <li>Suggests projects, resources, and tools for practice</li>
      <li>Helps users learn AI from beginner to advanced</li>
      <li>Useful for students, professionals, and self-learners</li>
    </ul>
  </div>
</div>

    <div className="h-full overflow-y-scroll p-6 flex flex-col md:flex-row items-start flex-wrap gap-6 justify-center text-slate-700">
      <RoadmapForm topic={topic} setTopic={setTopic} onGenerate={generateRoadmap} />
      <RoadmapResults roadmap={roadmap} />
    </div>
</>
  );
};

export default AIRoadmapGenerator;
