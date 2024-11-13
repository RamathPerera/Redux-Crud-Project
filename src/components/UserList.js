// src/components/UserList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser, selectUsers } from '../redux/slices/userSlice';

const UserList = ({ onEdit }) => {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">User List</h2>
      {users.map(user => (
        <div key={user.id} className="flex justify-between p-4 border-b">
          <div>
            <h3 className="font-semibold">{user.name}</h3>
            <p>{user.position}</p>
            <p>{user.status}</p>
          </div>
          <div className="space-x-2">
            <button
              onClick={() => onEdit(user)}
              className="px-4 py-1 bg-yellow-500 text-white rounded"
            >
              Edit
            </button>
            <button
              onClick={() => dispatch(deleteUser({ id: user.id }))}
              className="px-4 py-1 bg-red-500 text-white rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
