import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ title, info }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button onClick={() => setShowAnswer(!showAnswer)} className="btn">
          {showAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      <p>{showAnswer ? info : ''}</p>
    </article>
  );
};

export default Question;
