// src/components/UserForm.js
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUser, updateUser } from '../redux/slices/userSlice';

const UserForm = ({ selectedUser, onClearSelection }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [status, setStatus] = useState("Enable");

  useEffect(() => {
    if (selectedUser) {
      setName(selectedUser.name);
      setPosition(selectedUser.position);
      setStatus(selectedUser.status)
    } else {
      setName('');
      setPosition('');
      setStatus("Enable");
    }
  }, [selectedUser]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedUser) {
      dispatch(updateUser({ id: selectedUser.id, name, position }));
    } else {
      dispatch(addUser({ name, position, status }));
    }

    setName('');
    setPosition('');
    setStatus("Enable");
    onClearSelection();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-bold">{selectedUser ? 'Edit User' : 'Add User'}</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        className="w-full px-4 py-2 border rounded"
        required
      />
      <input
        type="text"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        placeholder="Position"
        className="w-full px-4 py-2 border rounded"
        required
      />
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
        {selectedUser ? 'Update User' : 'Add User'}
      </button>
    </form>
  );
};

export default UserForm;

