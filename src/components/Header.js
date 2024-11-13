// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUsers } from '../redux/slices/userSlice'

const Header = () => {
  const users = useSelector(selectUsers);
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Redux Application</h1>
        <nav className="space-x-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/counter" className="hover:underline">
            Counter
          </Link>
          <Link to="/users" className="hover:underline">
            Users
          </Link>
        </nav>
        {users.length > 0 ? (
            <div key={users[0].id}>
            <h1>{users[0].name}</h1>
            </div>
        ) : (
            <h1>Profile</h1>
        )}
      </div>
    </header>
  );
};

export default Header;
