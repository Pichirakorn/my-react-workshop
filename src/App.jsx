// src/App.jsx
import React from 'react';
import TodoAppContainer from './containers/TodoAppContainer';
import './App.css'; // Add this line back

function App() {
  return (
    <div className="app">
      <TodoAppContainer />
    </div>
  );
}

export default App;