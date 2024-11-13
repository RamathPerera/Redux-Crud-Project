// src/pages/UsersPage.js
import React, { useState } from 'react';
import UserList from '../components/UserList';
import UserForm from '../components/UserForm';
import Header from '../components/Header';

const UsersPage = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleEdit = (user) => {
    setSelectedUser(user);
  };

  const clearSelection = () => {
    setSelectedUser(null);
  };

  return (
    <div>
        <Header />
        <div className="p-8 space-y-8">
        <UserForm selectedUser={selectedUser} onClearSelection={clearSelection} />
        <UserList onEdit={handleEdit} />
        </div>
    </div>
  );
};

export default UsersPage;
