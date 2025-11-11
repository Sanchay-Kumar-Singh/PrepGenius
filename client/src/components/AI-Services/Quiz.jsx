import { Zap, BookOpen } from "lucide-react";
import React, { useState } from "react";
import quizs from "../../assets/19629.jpg";
// Gradient button component (new color theme: purple)
const GradientButton = ({ text, Icon, onClick }) => (
  <button
    onClick={onClick}
    className="w-full flex justify-center items-center gap-2 bg-linear-to-r from-[#8e2de2] to-[#4a00e0] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer hover:opacity-90 transition"
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

// Quiz Generator Form
const QuizForm = ({ topic, setTopic, onGenerate }) => (
  <div className="w-full max-w-lg p-6 bg-white rounded-lg border border-gray-200">
    <div className="flex items-center gap-3">
      <Zap className="w-6 text-[#8e2de2]" />
      <h1 className="text-xl font-semibold">AI Quiz Generator</h1>
    </div>

    <TextInput
      label="Enter Quiz Topic"
      placeholder="e.g., Python Basics, DSA, Java OOP"
      value={topic}
      onChange={(e) => setTopic(e.target.value)}
    />

    <GradientButton text="Generate Quiz" Icon={BookOpen} onClick={onGenerate} />
  </div>
);

// Quiz Results Component
const QuizResults = ({ quiz }) => (
  <div className="w-full max-w-lg p-6 bg-white rounded-lg flex flex-col border border-gray-200 max-h-[600px] min-h-96">
    <div className="flex items-center gap-3">
      <BookOpen className="w-5 h-5 text-[#8e2de2]" />
      <h1 className="text-xl font-semibold">Generated Quiz</h1>
    </div>

    <div className="flex-1 overflow-y-auto mt-4">
      {quiz ? (
        <ul className="list-decimal ml-5 text-gray-800 space-y-2">
          {quiz.map((q, index) => (
            <li key={index}>
              <p className="font-medium">{q.question}</p>
              <ul className="list-disc ml-5 text-gray-700">
                {q.options.map((opt, i) => (
                  <li key={i}>{opt}</li>
                ))}
                <li className="text-green-600 font-semibold mt-1">
                  Answer: {q.answer}
                </li>
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex flex-col items-center justify-center h-full text-gray-400">
          <BookOpen className="w-9 h-9 mb-2" />
          <p>Enter a topic and click "Generate Quiz"</p>
        </div>
      )}
    </div>
  </div>
);

// Main AI Quiz Generator Component
const AIQuizGenerator = () => {
  const [topic, setTopic] = useState("");
  const [quiz, setQuiz] = useState(null);

  const generateQuiz = () => {
    if (!topic) return;

    // Mock AI-generated quiz (replace with real AI backend)
    const mockQuiz = [
      {
        question: `What is the main feature of ${topic}?`,
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: "Option A",
      },
      {
        question: `Which of these is related to ${topic}?`,
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        answer: "Option 2",
      },
      {
        question: `Best practice when learning ${topic}?`,
        options: ["Practice daily", "Ignore theory", "Skip exercises", "None"],
        answer: "Practice daily",
      },
    ];

    setQuiz(mockQuiz);
  };

  return (
   <>
   <div className="max-w-5xl mx-auto px-4 py-10"><br /><br />
  <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-blue-900 text-center">
    AI Quiz Generator
  </h1>

  <img
    src={quizs} // replace with your quiz banner image variable
    alt="AI Quiz Generator"
    className="w-full md:h-100 md:w-2/3 mx-auto rounded-2xl shadow-lg"
  />

  <div className="max-w-3xl mx-auto mt-10">
    <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">
      Overview
    </h2>

    <p className="text-slate-700 leading-relaxed text-base md:text-lg text-justify">
      The AI Quiz Generator allows students and learners to instantly create topic-based
      quizzes to practice and test their knowledge. You simply provide a subject or topic,
      and the AI generates well-structured questions along with multiple choices and
      correct answers. This helps in active revision and faster exam preparation.
    </p>

    <ul className="mt-8 space-y-3 text-slate-700 text-sm md:text-base list-disc list-inside">
      <li>Create quizzes instantly from any topic or chapter</li>
      <li>Boosts learning through active recall and practice</li>
      <li>Helps track strengths and areas of improvement</li>
      <li>Useful for semester exams, competitive exams, and daily revision</li>
      <li>Saves time by avoiding manual question preparation</li>
    </ul>
  </div>
</div>

    <div className="h-full overflow-y-scroll p-6 flex flex-col md:flex-row items-start flex-wrap gap-6 justify-center text-slate-700">
      <QuizForm topic={topic} setTopic={setTopic} onGenerate={generateQuiz} />
      <QuizResults quiz={quiz} />
    </div>
   </>
  );
};

export default AIQuizGenerator;
