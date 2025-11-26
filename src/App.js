import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [result, setResult] = useState('');

  const newExample = () => {
    setNum1(Math.floor(Math.random() * 100) + 1);
    setNum2(Math.floor(Math.random() * 100) + 1);
    setUserAnswer('');
    setResult('');
  };

  const checkAnswer = () => {
    const correct = num1 + num2;
    if (parseInt(userAnswer) === correct) {
      setResult('Правильно! Молодец!');
    } else {
      setResult(`Неправильно. Правильный ответ: ${correct}`);
    }
  };

  useEffect(() => {
    newExample();
  }, []);

  return (
    <div className="App">
      <h1>Математический тренажёр</h1>
      <div className="example">
        {num1} + {num2} = ?
      </div>

      <input
        type="number"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        placeholder="Введи ответ сюда"
        autoFocus
      />

      <div className="buttons">
        <button onClick={checkAnswer}>Проверить</button>
        <button onClick={newExample}>Новый пример</button>
      </div>

      {result && <p className={result.includes('Правильно') ? 'correct' : 'wrong'}>{result}</p>}
    </div>
  );
}

export default App;