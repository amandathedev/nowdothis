import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTasks = input.split('\n').filter(task => task.trim() !== '');
    setTasks(newTasks);
    setCurrentTaskIndex(0);
    setFinished(false);
    setInput('');
  };

  const handleNext = () => {
    if (currentTaskIndex < tasks.length - 1) {
      setCurrentTaskIndex(currentTaskIndex + 1);
    } else {
      setFinished(true);
    }
  };

  const handleDone = () => {
    setTasks([]);
    setFinished(false);
  };

  return (
    <div className="App">
      {tasks.length === 0 && !finished ? (
        <form onSubmit={handleSubmit}>
          <textarea
            value={input}
            onChange={handleChange}
            placeholder="Enter your tasks"
            rows="30"
            cols="40"
          />
          <br />
          <button type="submit">Start</button>
        </form>
      ) : finished ? (
        <div>
          <h1>Yay!</h1>
          <button onClick={handleDone}>Done</button>
        </div>
      ) : (
        <div>
          <h1>{tasks[currentTaskIndex]}</h1>
          <button onClick={handleNext}>Next</button>
        </div>
      )}
    </div>
  );
}

export default App;
