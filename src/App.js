import React from 'react';
import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom';
import Info from './pages/Info';
import Todo from './pages/Todo';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/todo" element={<Todo/>} />
      <Route path="/info" element={<Info/>} />

    </Routes>
  );
}

export default App;
