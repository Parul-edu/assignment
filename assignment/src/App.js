import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Error from './components/Error';
import Dashboard from './components/Dashboard';

const AppLayout = ({ userId }) => {
  return (
    <div className="app">
      <Login userId={userId} />
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />} />
        <Route path="/dashboard/:userId" element={<Dashboard />} />
        <Route path='/error' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
