import React from 'react';
import { Routes, Route } from 'react-router';
import Homepage from './components/homepage';
function App() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Homepage />}/>
      </Routes>
    </div>
  );
}

export default App;
