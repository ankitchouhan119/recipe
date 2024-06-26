import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/App_Context';

const Navbar = ({ searchQuery, handleSearchChange }) => {
  const { isAuthenticate, logOut } = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut();
    navigate('/');
  };

  return (
    <div className="nav bg-dark p-2">
      <Link to="/" className="left" style={{ textDecoration: 'none', color: 'white' }}>
        <h2>Recipe</h2>
      </Link>
      <div className="right">
        {isAuthenticate && (
          <>
          

            <input
            type="text"
            id="search-bar"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search recipes..."
            className="mx-2 search-bar rounded"
          />
            <Link to="/add" className="btn btn-info mx-2">Add</Link>
            <Link to="/profile" className="btn btn-warning mx-2">Profile</Link>
            <button type="button" className="btn btn-danger mx-2" onClick={handleLogOut}>LogOut</button>
            <Link to="/saved" className="btn btn-light mx-2">Saved</Link>
         
          </>
        )}
        {!isAuthenticate && (
          <>
            <input
            type="text"
            id="search-bar"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search recipes..."
            className="mx-2"
          />
            <Link to="/login" className="btn btn-primary mx-2">Login</Link>
            <Link to="/register" className="btn btn-warning mx-2">Register</Link>
          </>
        )}
        <div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
