import { useState } from 'react'
import './App.css'
import Flashcard from "./Flashcard";

function App() {
  const flashcards = [
    { question: "What is a Product Manager?", answer: "..." },
    { question: "Key responsibilities?", answer: "..." },
    { question: "What is an MVP?", answer: "..." },
    { question: "What is a Product Roadmap?", answer: "..." },
  ];

  return (
    <div>
      <h1>The Ultimate PM Overview</h1>
      <p>Test Your Product Management Knowledge with this set of Flashcards!</p>
      <Flashcard flashcards={flashcards} />
    </div>
  );
}

export default App;
