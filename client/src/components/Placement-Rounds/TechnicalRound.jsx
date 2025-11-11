import React from "react";

const technicalTopics = [
  {
    title: "1. Programming Languages Basics",
    content: (
      <>
        <p><strong>C:</strong> Procedural language, used in system programming. Supports low-level memory access with pointers.</p>
        <p><strong>C++:</strong> Supports Object-Oriented Programming (OOP). Key features: Classes, Objects, Inheritance, Polymorphism, Encapsulation.</p>
        <p><strong>Java:</strong> Platform-independent language running on JVM. Supports Garbage Collection, Multithreading, Exception Handling.</p>
        <p><strong>Python:</strong> High-level, interpreted, dynamically typed language. Used in scripting, AI/ML, web development.</p>
      </>
    ),
  },
  {
    title: "2. Object-Oriented Programming",
    content: (
      <>
        <p>OOP Concepts:</p>
        <ul className="list-disc ml-5">
          <li>Class & Object</li>
          <li>Encapsulation</li>
          <li>Inheritance</li>
          <li>Polymorphism (Compile-time & Run-time)</li>
          <li>Abstraction</li>
        </ul>
      </>
    ),
  },
  {
    title: "3. Data Structures",
    content: (
      <>
        <p>Important Data Structures:</p>
        <ul className="list-disc ml-5">
          <li>Arrays & Strings: Fixed-size and contiguous memory structures</li>
          <li>Linked List: Nodes with data & pointer, allows dynamic memory allocation</li>
          <li>Stack & Queue: LIFO & FIFO structures</li>
          <li>Trees: Binary Tree, Binary Search Tree, AVL, Heap</li>
          <li>Graphs: Represent relationships using vertices & edges</li>
          <li>Hashing: Key-Value storage with fast access</li>
          <li>Dynamic Programming: Solve complex problems by storing subproblem results</li>
        </ul>
      </>
    ),
  },
  {
    title: "4. Algorithms",
    content: (
      <>
        <p>Important Algorithms:</p>
        <ul className="list-disc ml-5">
          <li>Sorting: Bubble, Selection, Insertion, Merge, Quick, Heap</li>
          <li>Searching: Linear, Binary Search</li>
          <li>Graph algorithms: BFS, DFS, Dijkstra, Kruskal</li>
          <li>Recursion & Backtracking: Solve problems step-by-step and explore all possibilities</li>
        </ul>
      </>
    ),
  },
  {
    title: "5. Database & SQL",
    content: (
      <>
        <ul className="list-disc ml-5">
          <li>DBMS vs RDBMS</li>
          <li>Normalization (1NF, 2NF, 3NF) to reduce redundancy</li>
          <li>Primary & Foreign keys</li>
          <li>SQL Queries: SELECT, JOIN, GROUP BY, HAVING</li>
          <li>Transactions & ACID properties (Atomicity, Consistency, Isolation, Durability)</li>
        </ul>
      </>
    ),
  },
  {
    title: "6. Operating Systems",
    content: (
      <>
        <ul className="list-disc ml-5">
          <li>Processes & Threads</li>
          <li>CPU Scheduling: FCFS, SJF, Round Robin</li>
          <li>Memory Management: Paging, Segmentation</li>
          <li>Deadlock: Prevention, Avoidance, Detection</li>
          <li>File System basics</li>
        </ul>
      </>
    ),
  },
  {
    title: "7. Computer Networks",
    content: (
      <>
        <ul className="list-disc ml-5">
          <li>OSI & TCP/IP Model</li>
          <li>IP Addressing & Subnetting</li>
          <li>Routing & Switching</li>
          <li>TCP vs UDP</li>
          <li>Protocols: HTTP, HTTPS, DNS, FTP, SMTP</li>
        </ul>
      </>
    ),
  },
  {
    title: "8. Design Patterns & OOP Concepts",
    content: (
      <>
        <ul className="list-disc ml-5">
          <li>Singleton: Only one instance of class</li>
          <li>Factory: Object creation without specifying exact class</li>
          <li>Observer: One-to-many dependency</li>
          <li>Strategy: Define a family of algorithms and make them interchangeable</li>
          <li>Decorator: Add behavior dynamically to objects</li>
        </ul>
      </>
    ),
  },
  {
    title: "9. DSA & LeetCode Tips",
    content: (
      <>
        <ul className="list-disc ml-5">
          <li>Practice Arrays, Linked List, Stack/Queue, Trees, Graphs</li>
          <li>Focus on recursion & dynamic programming</li>
          <li>Understand time & space complexity</li>
          <li>Use LeetCode, GeeksforGeeks for coding practice</li>
        </ul>
      </>
    ),
  },
];

// 15 technical questions with dropdown answers
const technicalQuestions = [
  {
    question: "What is a pointer in C?",
    answer: "A pointer is a variable that stores the memory address of another variable."
  },
  {
    question: "Difference between stack and heap memory?",
    answer: "Stack is used for static memory allocation, heap is for dynamic allocation."
  },
  {
    question: "What is OOP?",
    answer: "Object-Oriented Programming is a paradigm based on objects, classes, inheritance, and polymorphism."
  },
  {
    question: "Difference between Java and Python?",
    answer: "Java is statically typed, compiled and platform-independent; Python is dynamically typed and interpreted."
  },
  {
    question: "Explain TCP vs UDP?",
    answer: "TCP is connection-oriented and reliable; UDP is connectionless and faster but unreliable."
  },
  {
    question: "What is a deadlock?",
    answer: "Deadlock occurs when two or more processes are waiting indefinitely for resources held by each other."
  },
  {
    question: "Difference between Array and Linked List?",
    answer: "Array has contiguous memory and O(1) access; Linked List has nodes connected by pointers and O(n) access."
  },
  {
    question: "What is a binary search tree?",
    answer: "A BST is a tree where left child < root < right child, allowing efficient search, insert, and delete."
  },
  {
    question: "Explain ACID properties in DBMS?",
    answer: "ACID stands for Atomicity, Consistency, Isolation, Durability ensuring reliable transactions."
  },
  {
    question: "What is polymorphism?",
    answer: "Polymorphism allows objects to take many forms; e.g., same method name behaving differently in subclasses."
  },
  {
    question: "Difference between process and thread?",
    answer: "Process is independent execution unit; thread is a lightweight sub-process sharing memory of process."
  },
  {
    question: "What is normalization?",
    answer: "Process of organizing database to reduce redundancy and improve data integrity."
  },
  {
    question: "Difference between BFS and DFS?",
    answer: "BFS traverses level by level; DFS traverses depth-wise."
  },
  {
    question: "Explain the Singleton pattern?",
    answer: "Ensures a class has only one instance and provides a global point of access."
  },
  {
    question: "What is dynamic programming?",
    answer: "Optimization technique to solve problems by storing results of subproblems."
  },
];

const TechnicalRound = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8"><br /><br /><br />
      <h1 className="text-4xl font-bold text-center text-purple-800 mb-8">
        Complete Technical Round Interview Preparation
      </h1>

      {/* All theory content in one scrollable page */}
      {technicalTopics.map((topic, index) => (
        <div key={index} className="space-y-2">
          <h2 className="text-2xl font-semibold text-purple-700">{topic.title}</h2>
          <div className="text-gray-800">{topic.content}</div>
        </div>
      ))}

      {/* Questions at the end */}
      <section className="space-y-4 mt-6">
        <h2 className="text-2xl font-semibold text-purple-700">Top 15 Interview Questions</h2>
        {technicalQuestions.map((q, i) => (
          <details key={i} className="border border-purple-300 rounded-md p-2 bg-purple-50">
            <summary className="cursor-pointer font-medium">{i + 1}. {q.question}</summary>
            <p className="ml-4 mt-2 text-gray-700">{q.answer}</p>
          </details>
        ))}
      </section>
    </div>
  );
};

export default TechnicalRound;
