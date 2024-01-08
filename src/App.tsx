import React from 'react';
import './App.css';

function App() {

  const names = ['Dima', 'Sveta', 'Katya', 'Valera'];
  const users = [{name: 'Dima'}, {name: 'Sveta'}, {name: 'Katya'}];
  const liElements = users.map((u, index) => <li key={index}>{index} - {u.name}</li>)

  return (
    <div className="App">
      <ul>
        {liElements}
      </ul>
    </div>
  );
}

export default App;
