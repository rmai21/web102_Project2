import { useState } from 'react'
import './App.css'

function App() {
  const [cards, setCards] = useState(0)

  return (
    <>
      <div>
        <h1>The Ultimate PM Overview</h1>
        <p>
          Test Your Product Management Knowledge! 
          Click on the Flashcard to begin and flip the card over. To move on to the next card, click the arrow keys.
        </p>
      </div>

      <div className="card">
        <h2>Flashcard {cards}</h2>
        <p>Question will be here</p>
      </div>

    </>
  )
}

export default App
