import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import AddRecipe from './components/AddRecipe';
import Saved from './components/Saved';
import Home from './components/Home';
import Profile from './components/Profile';
import Detail from './components/Detail';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <Router>
        <Navbar searchQuery={searchQuery} handleSearchChange={handleSearchChange} />
        <Routes>
          <Route path='/' element={<Home searchQuery={searchQuery} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/add' element={<AddRecipe />} />
          <Route path='/saved' element={<Saved />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/:id' element={<Detail />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
