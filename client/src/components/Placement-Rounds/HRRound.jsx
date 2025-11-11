import React from "react";

const hrTopics = [
  {
    title: "1. Introduction to HR Round",
    content: (
      <>
        <p>The HR (Human Resource) round is a crucial part of the interview process. It focuses on evaluating your personality, communication skills, attitude, and cultural fit with the company. While technical rounds assess your skill set, the HR round ensures you can work well in a team and align with the company's values.</p>
      </>
    ),
  },
  {
    title: "2. Purpose of HR Interview",
    content: (
      <>
        <ul className="list-disc ml-5">
          <li>Assess candidate's communication and interpersonal skills.</li>
          <li>Understand career goals and motivation.</li>
          <li>Evaluate problem-solving, adaptability, and teamwork.</li>
          <li>Determine cultural and organizational fit.</li>
          <li>Verify resume and background details.</li>
        </ul>
      </>
    ),
  },
  {
    title: "3. Key HR Round Topics",
    content: (
      <>
        <p>During HR rounds, interviewers usually focus on:</p>
        <ul className="list-disc ml-5">
          <li>Self-introduction and personal background.</li>
          <li>Strengths, weaknesses, and achievements.</li>
          <li>Career goals and motivation for the job.</li>
          <li>Handling conflict and teamwork experiences.</li>
          <li>Salary expectations and notice period.</li>
          <li>Behavioral questions using STAR (Situation, Task, Action, Result) method.</li>
        </ul>
      </>
    ),
  },
  {
    title: "4. Common HR Round Questions",
    content: (
      <>
        <p>HR interviews often include:</p>
        <ul className="list-disc ml-5">
          <li>Tell me about yourself.</li>
          <li>Why do you want to work with our company?</li>
          <li>What are your strengths and weaknesses?</li>
          <li>Where do you see yourself in 5 years?</li>
          <li>Describe a challenging situation and how you handled it.</li>
          <li>How do you handle stress and pressure?</li>
          <li>Why should we hire you?</li>
        </ul>
      </>
    ),
  },
  {
    title: "5. Tips for HR Round",
    content: (
      <>
        <ul className="list-disc ml-5">
          <li>Be confident and maintain a positive attitude.</li>
          <li>Communicate clearly and concisely.</li>
          <li>Prepare a strong self-introduction.</li>
          <li>Be honest and avoid exaggeration.</li>
          <li>Research the company and role beforehand.</li>
          <li>Listen carefully and answer questions thoughtfully.</li>
          <li>Dress professionally and maintain proper body language.</li>
        </ul>
      </>
    ),
  },
  {
    title: "6. STAR Method",
    content: (
      <>
        <p>The STAR method is commonly used to answer behavioral questions:</p>
        <ul className="list-disc ml-5">
          <li><strong>Situation:</strong> Describe the situation or context.</li>
          <li><strong>Task:</strong> Explain the task you needed to accomplish.</li>
          <li><strong>Action:</strong> Describe the actions you took.</li>
          <li><strong>Result:</strong> Share the outcome and what you learned.</li>
        </ul>
      </>
    ),
  },
  {
    title: "7. Common Mistakes to Avoid",
    content: (
      <>
        <ul className="list-disc ml-5">
          <li>Speaking negatively about previous employers.</li>
          <li>Being unprepared or vague in answers.</li>
          <li>Overconfidence or arrogance.</li>
          <li>Lack of research about the company.</li>
          <li>Failing to demonstrate enthusiasm or motivation.</li>
        </ul>
      </>
    ),
  },
];

// 15 HR Questions with answers
const hrQuestions = [
  { question: "Tell me about yourself.", answer: "Provide a brief introduction highlighting your education, experience, skills, and achievements relevant to the role." },
  { question: "Why do you want to work here?", answer: "Explain your motivation for joining the company, showing alignment with their values and role." },
  { question: "What are your strengths?", answer: "Mention key skills, abilities, or qualities that make you suitable for the role." },
  { question: "What are your weaknesses?", answer: "Share a real weakness and how you are working to improve it." },
  { question: "Where do you see yourself in 5 years?", answer: "Talk about career goals and growth, aligning with company opportunities." },
  { question: "Why should we hire you?", answer: "Highlight your skills, experience, and unique qualities that make you the ideal candidate." },
  { question: "Describe a challenging situation and how you handled it.", answer: "Use the STAR method to describe the situation, action, and result effectively." },
  { question: "How do you handle stress?", answer: "Explain coping strategies like time management, prioritization, and staying calm under pressure." },
  { question: "Why did you leave your last job?", answer: "Be honest and professional; focus on growth opportunities rather than negativity." },
  { question: "What is your greatest achievement?", answer: "Share an achievement that demonstrates your skills, problem-solving, and impact." },
  { question: "How do you work in a team?", answer: "Explain your teamwork experience and ability to collaborate effectively." },
  { question: "What motivates you?", answer: "Talk about factors like learning, challenge, growth, or achieving results." },
  { question: "How do you handle criticism?", answer: "Show that you take constructive feedback positively and improve yourself." },
  { question: "Tell me about a failure you faced.", answer: "Explain a failure, what you learned, and how you applied it to improve." },
  { question: "Do you have any questions for us?", answer: "Prepare thoughtful questions about the role, team, or company culture." },
];

const HRRound = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8"><br /><br /><br />
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">
        HR Round Interview Preparation
      </h1>

      {/* All theory content */}
      {hrTopics.map((topic, index) => (
        <div key={index} className="space-y-2">
          <h2 className="text-2xl font-semibold text-blue-700">{topic.title}</h2>
          <div className="text-gray-800">{topic.content}</div>
        </div>
      ))}

      {/* 15 HR Questions */}
      <section className="space-y-4 mt-6">
        <h2 className="text-2xl font-semibold text-blue-700">Top 15 HR Interview Questions</h2>
        {hrQuestions.map((q, i) => (
          <details key={i} className="border border-blue-300 rounded-md p-2 bg-blue-50">
            <summary className="cursor-pointer font-medium">{i + 1}. {q.question}</summary>
            <p className="ml-4 mt-2 text-gray-700">{q.answer}</p>
          </details>
        ))}
      </section>
    </div>
  );
};

export default HRRound;
