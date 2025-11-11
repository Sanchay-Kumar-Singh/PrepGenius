import { Users, MessageCircle } from "lucide-react";
import React, { useState } from "react";
import mock from '../../assets/cartoon-ai-robot-scene.jpg'
// Gradient Button component with orange-red theme
const GradientButton = ({ text, Icon, onClick }) => (
  <button
    onClick={onClick}
    className="w-full flex justify-center items-center gap-2 bg-linear-to-r from-[#ff512f] to-[#dd2476] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer hover:opacity-90 transition"
  >
    {Icon && <Icon className="w-5" />}
    {text}
  </button>
);

// Text Input component
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

// Mock Interview Form
const InterviewForm = ({ role, setRole, onGenerate }) => (
  <div className="w-full max-w-lg p-6 bg-white rounded-lg border border-gray-200">
    <div className="flex items-center gap-3">
      <Users className="w-6 text-[#ff512f]" />
      <h1 className="text-xl font-semibold">AI Mock Interview</h1>
    </div>

    <TextInput
      label="Enter Job Role / Skill"
      placeholder="e.g., Software Engineer, Java Developer, Data Scientist"
      value={role}
      onChange={(e) => setRole(e.target.value)}
    />

    <GradientButton text="Generate Mock Interview" Icon={MessageCircle} onClick={onGenerate} />
  </div>
);

// Mock Interview Results
const InterviewResults = ({ questions }) => (
  <div className="w-full max-w-lg p-6 bg-white rounded-lg flex flex-col border border-gray-200 max-h-[600px] min-h-96">
    <div className="flex items-center gap-3">
      <MessageCircle className="w-5 h-5 text-[#ff512f]" />
      <h1 className="text-xl font-semibold">Generated Mock Interview</h1>
    </div>

    <div className="flex-1 overflow-y-auto mt-4">
      {questions ? (
        <ul className="list-decimal ml-5 text-gray-800 space-y-4">
          {questions.map((q, index) => (
            <li key={index} className="space-y-2">
              <p className="font-medium">{q.question}</p>
              {q.answer && (
                <p className="text-green-600 font-semibold">
                  Suggested Answer: {q.answer}
                </p>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex flex-col items-center justify-center h-full text-gray-400">
          <MessageCircle className="w-9 h-9 mb-2" />
          <p>Enter a role or skill and click "Generate Mock Interview"</p>
        </div>
      )}
    </div>
  </div>
);

// Main AI Mock Interview Component
const AIMockInterview = () => {
  const [role, setRole] = useState("");
  const [questions, setQuestions] = useState(null);

  const generateInterview = () => {
    if (!role) return;

    // Mock AI-generated interview questions (replace with actual API)
    const mockQuestions = [
      {
        question: `Can you explain your experience with ${role}?`,
        answer: "Describe relevant projects and skills.",
      },
      {
        question: `What challenges have you faced while working in ${role}?`,
        answer: "Explain a technical problem and how you solved it.",
      },
      {
        question: `How do you keep yourself updated in the field of ${role}?`,
        answer: "Mention courses, blogs, open-source contributions, etc.",
      },
      {
        question: `Describe a project where you applied your ${role} skills.`,
        answer: "Give project details, tools used, and impact.",
      },
      {
        question: `How do you approach problem-solving in ${role}?`,
        answer: "Explain your methodology step by step.",
      },
    ];

    setQuestions(mockQuestions);
  };

  return (
 <>
 <div className="max-w-5xl mx-auto px-4 py-10"><br /><br />
  <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-blue-900 text-center">
    AI Mock Interview
  </h1>

  <img
    src={mock} // replace with your image variable
    alt="AI Mock Interview"
    className="w-full md:w-2/3 mx-auto rounded-2xl shadow-lg"
  />

  <div className="max-w-3xl mx-auto mt-10">
    <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">
      Overview
    </h2>

    <p className="text-slate-700 leading-relaxed text-base md:text-lg text-justify">
      The AI Mock Interview system allows you to practice real interview scenarios
      with instant feedback. It simulates both HR and technical interviews, listens
      to your responses, and then evaluates your confidence level, clarity,
      communication skills, and subject knowledge. This helps you improve your
      performance before facing actual interviews.
    </p>

    <ul className="mt-8 space-y-3 text-slate-700 text-sm md:text-base list-disc list-inside">
      <li>Practice HR and Technical rounds with AI</li>
      <li>Get instant feedback on tone, clarity, and confidence</li>
      <li>Learn how to answer questions professionally</li>
      <li>Understand your weak areas and improve them</li>
      <li>Boost your readiness and reduce interview fear</li>
    </ul>
  </div>
</div>

    <div className="h-full overflow-y-scroll p-6 flex flex-col md:flex-row items-start flex-wrap gap-6 justify-center text-slate-700">
      <InterviewForm role={role} setRole={setRole} onGenerate={generateInterview} />
      <InterviewResults questions={questions} />
    </div>
 </>
  );
};

export default AIMockInterview;
