import React from 'react';
import { Routes, Route } from 'react-router';
import Homepage from './components/homepage';
import SuccessPage from './components/successPage';
function App() {
  return (
    <div className='font-roboto'>
      <Routes>
      <Route path='/' element={<Homepage />}/>
      <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </div>
  );
}

export default App;
