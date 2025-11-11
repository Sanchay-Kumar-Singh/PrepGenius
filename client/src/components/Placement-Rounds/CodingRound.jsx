import React, { useState } from "react";

const dsaTopics = [
  {
    title: "1. Arrays",
    content: (
      <div>
        <p><strong>Concept:</strong> Collection of elements stored at contiguous memory locations.</p>
        <p><strong>Operations:</strong> Traversal, Insertion, Deletion, Searching, Sorting.</p>
        <p><strong>Example:</strong> Find maximum element in array.</p>
        <pre className="bg-gray-800 text-white p-2 rounded">{`int max = arr[0];
for(int i = 1; i < n; i++){
    if(arr[i] > max) max = arr[i];
}`}</pre>
      </div>
    ),
  },
  {
    title: "2. Linked List",
    content: (
      <div>
        <p><strong>Concept:</strong> Linear data structure with nodes containing data and pointer to next node.</p>
        <p><strong>Types:</strong> Singly, Doubly, Circular</p>
        <p><strong>Operations:</strong> Traversal, Insertion, Deletion, Reverse</p>
        <p><strong>Example (Reverse linked list):</strong></p>
        <pre className="bg-gray-800 text-white p-2 rounded">{`Node* prev = NULL, *curr = head, *next;
while(curr){
    next = curr->next;
    curr->next = prev;
    prev = curr;
    curr = next;
}
head = prev;`}</pre>
      </div>
    ),
  },
  {
    title: "3. Stack & Queue",
    content: (
      <div>
        <p><strong>Stack:</strong> LIFO, operations: push, pop, peek</p>
        <p><strong>Queue:</strong> FIFO, operations: enqueue, dequeue, front</p>
        <p><strong>Example (Stack - Balanced Parentheses):</strong></p>
        <pre className="bg-gray-800 text-white p-2 rounded">{`stack<char> s;
for(char c : str){
    if(c=='(') s.push(c);
    else if(c==')' && !s.empty()) s.pop();
}
if(s.empty()) cout<<"Balanced";`}</pre>
      </div>
    ),
  },
  {
    title: "4. Trees",
    content: (
      <div>
        <p><strong>Concept:</strong> Hierarchical data structure with root and children nodes.</p>
        <p><strong>Types:</strong> Binary Tree, BST, AVL, Heap</p>
        <p><strong>Traversals:</strong> Inorder, Preorder, Postorder, Level-order</p>
        <p><strong>Example (Inorder traversal):</strong></p>
        <pre className="bg-gray-800 text-white p-2 rounded">{`void inorder(Node* root){
    if(!root) return;
    inorder(root->left);
    cout << root->data << " ";
    inorder(root->right);
}`}</pre>
      </div>
    ),
  },
  {
    title: "5. Graphs",
    content: (
      <div>
        <p><strong>Concept:</strong> Collection of nodes(vertices) connected by edges.</p>
        <p><strong>Representation:</strong> Adjacency List / Adjacency Matrix</p>
        <p><strong>Traversal:</strong> BFS, DFS</p>
        <p><strong>Example (DFS):</strong></p>
        <pre className="bg-gray-800 text-white p-2 rounded">{`void dfs(int v, vector<bool>& visited){
    visited[v] = true;
    cout << v << " ";
    for(int u : adj[v]){
        if(!visited[u]) dfs(u, visited);
    }
}`}</pre>
      </div>
    ),
  },
  {
    title: "6. Hashing",
    content: (
      <div>
        <p><strong>Concept:</strong> Store key-value pairs for fast access.</p>
        <p><strong>Example:</strong> Count frequency of array elements.</p>
        <pre className="bg-gray-800 text-white p-2 rounded">{`unordered_map<int,int> freq;
for(int x: arr) freq[x]++;
for(auto p: freq) cout << p.first << " occurs " << p.second << " times";`}</pre>
      </div>
    ),
  },
  {
    title: "7. Dynamic Programming",
    content: (
      <div>
        <p><strong>Concept:</strong> Optimize recursive solutions using memoization/tabulation.</p>
        <p><strong>Example:</strong> Fibonacci using DP</p>
        <pre className="bg-gray-800 text-white p-2 rounded">{`int fib[n+1];
fib[0] = 0; fib[1] = 1;
for(int i = 2; i <= n; i++)
    fib[i] = fib[i-1] + fib[i-2];`}</pre>
      </div>
    ),
  },
  {
    title: "8. Searching & Sorting",
    content: (
      <div>
        <p><strong>Searching:</strong> Linear, Binary</p>
        <p><strong>Sorting:</strong> Bubble, Selection, Insertion, Merge, Quick, Heap</p>
        <p><strong>Example (Binary Search):</strong></p>
        <pre className="bg-gray-800 text-white p-2 rounded">{`int l = 0, r = n-1;
while(l <= r){
    int mid = l + (r-l)/2;
    if(arr[mid] == key) return mid;
    else if(arr[mid] < key) l = mid+1;
    else r = mid-1;
}`}</pre>
      </div>
    ),
  },
];

// LeetCode questions with solution and link
const dsaQuestions = [
  {
    topic: "Arrays",
    level: "Easy",
    question: "Two Sum",
    leetcode: "https://leetcode.com/problems/two-sum/",
    solution: "Use hashmap to store value->index and check complement"
  },
  {
    topic: "Arrays",
    level: "Medium",
    question: "Product of Array Except Self",
    leetcode: "https://leetcode.com/problems/product-of-array-except-self/",
    solution: "Use prefix and suffix product arrays"
  },
  {
    topic: "Arrays",
    level: "Hard",
    question: "Trapping Rain Water",
    leetcode: "https://leetcode.com/problems/trapping-rain-water/",
    solution: "Use two pointers, maintain left_max & right_max"
  },
  {
    topic: "Linked List",
    level: "Easy",
    question: "Reverse Linked List",
    leetcode: "https://leetcode.com/problems/reverse-linked-list/",
    solution: "Iterative or recursive pointer reversal"
  },
  {
    topic: "Linked List",
    level: "Medium",
    question: "Linked List Cycle II",
    leetcode: "https://leetcode.com/problems/linked-list-cycle-ii/",
    solution: "Use fast & slow pointers to detect cycle"
  },
  {
    topic: "Stack & Queue",
    level: "Easy",
    question: "Valid Parentheses",
    leetcode: "https://leetcode.com/problems/valid-parentheses/",
    solution: "Use stack to match opening & closing brackets"
  },
  {
    topic: "Dynamic Programming",
    level: "Easy",
    question: "Climbing Stairs",
    leetcode: "https://leetcode.com/problems/climbing-stairs/",
    solution: "DP using Fibonacci logic"
  },
  {
    topic: "Dynamic Programming",
    level: "Medium",
    question: "Coin Change",
    leetcode: "https://leetcode.com/problems/coin-change/",
    solution: "DP array storing min coins for each amount"
  },
];

const Coding = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8"> <br /><br /><br />
      <h1 className="text-4xl font-bold text-center text-indigo-800 mb-8">
        Complete DSA Overview & LeetCode Practice
      </h1>

      {/* Topics Section */}
      {dsaTopics.map((topic, index) => (
        <div key={index} className="border border-indigo-300 rounded-lg overflow-hidden">
          <button
            onClick={() => toggle(index)}
            className="w-full text-left px-4 py-3 bg-indigo-100 hover:bg-indigo-200 font-semibold text-indigo-900"
          >
            {topic.title}
          </button>
          {openIndex === index && (
            <div className="p-4 bg-indigo-50 text-gray-800 space-y-2">
              {topic.content}
            </div>
          )}
        </div>
      ))}

      {/* LeetCode Questions */}
      <section className="space-y-4 mt-6">
        <h2 className="text-2xl font-semibold text-indigo-700">LeetCode Practice Questions</h2>
        {dsaQuestions.map((q, i) => (
          <details key={i} className="border border-indigo-300 rounded-md p-2 bg-indigo-50">
            <summary className="cursor-pointer font-medium">{q.topic} [{q.level}]: {q.question}</summary>
            <p className="ml-4 mt-2 text-gray-700"><strong>Solution:</strong> {q.solution}</p>
            <a
              href={q.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 mt-1 inline-block text-blue-600 hover:underline"
            >
              Open on LeetCode
            </a>
          </details>
        ))}
      </section>
    </div>
  );
};

export default Coding;
