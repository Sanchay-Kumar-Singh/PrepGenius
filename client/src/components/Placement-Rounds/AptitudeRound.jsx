import React, { useState } from "react";

const aptitudeSections = [
  {
    title: "1. Numerical Ability / Quantitative Aptitude",
    content: (
      <>
        <p><strong>Definition:</strong> The ability to work with numbers, formulas, and mathematical concepts to solve problems.</p>
        <p><strong>Topics & Formulas:</strong></p>
        <ul className="list-disc ml-5">
          <li><strong>Number System:</strong> Natural numbers, integers, fractions, decimals, LCM, HCF, Prime numbers, Odd/Even numbers.</li>
          <li><strong>Percentage:</strong> Percentage = (Part/Whole) × 100</li>
          <li><strong>Profit & Loss:</strong> Profit = SP - CP, Loss = CP - SP, SP = CP + Profit, Discount = Marked Price - Selling Price</li>
          <li><strong>Simple Interest (SI):</strong> SI = (P × R × T)/100</li>
          <li><strong>Compound Interest (CI):</strong> CI = P(1 + R/100)^T - P</li>
          <li><strong>Ratio & Proportion:</strong> a:b = c:d, Cross multiplication to solve.</li>
          <li><strong>Averages:</strong> Average = Sum of elements / Number of elements</li>
          <li><strong>Time, Speed & Distance:</strong> Speed = Distance/Time, Time = Distance/Speed, Distance = Speed × Time</li>
          <li><strong>Time & Work:</strong> Work = Rate × Time, Combined work of multiple persons = Sum of individual rates</li>
          <li><strong>Mensuration:</strong> Area & Volume formulas for square, rectangle, circle, cube, cylinder, sphere</li>
          <li><strong>Algebra:</strong> Solving equations, Quadratic equations, Factorization</li>
        </ul>
        <p><strong>Example:</strong> If a product costs $500 and is sold at 20% profit, Selling Price = 500 + 20% of 500 = 600</p>
      </>
    ),
  },
  {
    title: "2. Verbal Ability / English",
    content: (
      <>
        <p><strong>Definition:</strong> Measures proficiency in English language: grammar, vocabulary, comprehension, and usage.</p>
        <p><strong>Topics:</strong></p>
        <ul className="list-disc ml-5">
          <li>Reading Comprehension – Understand passages, summarize, answer questions.</li>
          <li>Grammar – Tenses, Subject-Verb Agreement, Articles, Prepositions, Conjunctions, Modifiers.</li>
          <li>Synonyms & Antonyms – Improve vocabulary by identifying correct meaning or opposite.</li>
          <li>Sentence Correction – Detect grammatical or structural errors.</li>
          <li>Para Jumbles – Arrange sentences to form coherent paragraphs.</li>
          <li>Cloze Test – Fill the blanks with appropriate words.</li>
          <li>Idioms & Phrases – Commonly used phrases in English.</li>
        </ul>
        <p><strong>Example:</strong></p>
        <ul className="list-disc ml-5">
          <li>Synonym of "Abundant": Plentiful</li>
          <li>Antonym of "Scarce": Abundant</li>
          <li>Correct the sentence: "She go to market." → "She goes to the market."</li>
        </ul>
      </>
    ),
  },
  {
    title: "3. Logical Reasoning",
    content: (
      <>
        <p><strong>Definition:</strong> Tests analytical and logical thinking to solve puzzles, sequences, and reasoning problems.</p>
        <p><strong>Topics:</strong></p>
        <ul className="list-disc ml-5">
          <li>Series & Patterns – Numbers, Alphabets, Mixed series.</li>
          <li>Blood Relations – Solve family relation problems.</li>
          <li>Seating Arrangements – Linear, Circular, 2D arrangements.</li>
          <li>Puzzles – Logical puzzles, problem-solving exercises.</li>
          <li>Direction Sense – Determine position/direction after moves.</li>
          <li>Coding-Decoding – Convert letters/numbers according to rules.</li>
          <li>Statement & Conclusions / Assumptions</li>
          <li>Clocks, Calendars, and Dice</li>
        </ul>
        <p><strong>Example:</strong> Find the next number in series: 2, 6, 12, 20, ? Answer: 30 (Differences: 4, 6, 8, next 10 → 20+10=30)</p>
      </>
    ),
  },
  {
    title: "4. Data Interpretation",
    content: (
      <>
        <p><strong>Definition:</strong> Analyze data from charts, tables, and graphs and answer questions accurately.</p>
        <p><strong>Topics:</strong></p>
        <ul className="list-disc ml-5">
          <li>Tables – Read data and perform calculations.</li>
          <li>Bar Graphs – Compare quantities.</li>
          <li>Line Graphs – Observe trends over time.</li>
          <li>Pie Charts – Calculate percentages.</li>
          <li>Pictorial Representation – Interpret pictures to numbers.</li>
          <li>Caselets – Short data-based paragraphs with multiple questions.</li>
          <li>Data Sufficiency – Determine if given data is enough to answer questions.</li>
        </ul>
        <p><strong>Example:</strong> Sales of Company X over 5 months: Jan-50, Feb-60, Mar-70, Apr-80, May-90. Average sales = (50+60+70+80+90)/5 = 70</p>
      </>
    ),
  },
];

const aptitudeQuestions = [
  {
    question: "1. If a train travels 120 km in 2 hours, what is its speed?",
    answer: "Speed = Distance / Time = 120 / 2 = 60 km/h"
  },
  {
    question: "2. Find the compound interest on $5000 for 2 years at 5% p.a.",
    answer: "CI = 5000 * (1 + 5/100)^2 - 5000 = 512.50"
  },
  {
    question: "3. Find the next number in series: 3, 6, 9, 12, ?",
    answer: "Next number = 15 (common difference 3)"
  },
  {
    question: "4. If A is the father of B and B is the mother of C, what is relation of A to C?",
    answer: "A is Grandfather / Grandmother of C"
  },
  {
    question: "5. Fill in the blank: She is _____ than her sister.",
    answer: "taller"
  },
  {
    question: "6. Choose the antonym of 'Scarce'.",
    answer: "Abundant"
  },
  {
    question: "7. Total population from table: A-1M, B-2M, C-3M.",
    answer: "Total population = 1 + 2 + 3 = 6M"
  },
  {
    question: "8. Sales increased from 200 to 250, find percentage increase.",
    answer: "Percentage increase = ((250-200)/200)×100 = 25%"
  },
  {
    question: "9. Solve: 5 + 3 × 2 - 6 ÷ 3",
    answer: "5 + 6 - 2 = 9"
  },
  {
    question: "10. Find LCM of 12 and 18.",
    answer: "LCM = 36"
  },
  {
    question: "11. Find HCF of 56 and 98.",
    answer: "HCF = 14"
  },
  {
    question: "12. Simplify: 25% of 400 + 40% of 200",
    answer: "100 + 80 = 180"
  },
  {
    question: "13. Rearrange sentences: 'John went to the market. He bought apples. He returned home.'",
    answer: "Correct order: John went to the market. He bought apples. He returned home."
  },
  {
    question: "14. Solve puzzle: 3 boys and 2 girls sit in a row. How many arrangements possible?",
    answer: "Total arrangements = 5! = 120"
  },
  {
    question: "15. A cube has side 5 cm. Find volume.",
    answer: "Volume = side^3 = 5^3 = 125 cm³"
  },
];

const Aptitude = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8"> <br /><br /><br />
      <h1 className="text-4xl font-bold text-center text-yellow-800 mb-8">
        Complete Aptitude Overview
      </h1>

      {/* Sections */}
      {aptitudeSections.map((section, index) => (
        <div key={index} className="border border-yellow-300 rounded-lg overflow-hidden">
          <button
            onClick={() => toggle(index)}
            className="w-full text-left px-4 py-3 bg-yellow-100 hover:bg-yellow-200 font-semibold text-yellow-900"
          >
            {section.title}
          </button>
          {openIndex === index && (
            <div className="p-4 bg-yellow-50 text-gray-800 space-y-2">
              {section.content}
            </div>
          )}
        </div>
      ))}

      {/* Practice Questions */}
      <section className="space-y-4 mt-6">
        <h2 className="text-2xl font-semibold text-yellow-700">Practice Questions (with Answers)</h2>
        {aptitudeQuestions.map((q, i) => (
          <details key={i} className="border border-yellow-300 rounded-md p-2 bg-yellow-50">
            <summary className="cursor-pointer font-medium">{q.question}</summary>
            <p className="ml-4 mt-2 text-gray-700">{q.answer}</p>
          </details>
        ))}
      </section>
    </div>
  );
};

export default Aptitude;
