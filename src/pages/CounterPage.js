// src/pages/CounterPage.js
import React from 'react';
import Counter from '../components/Counter';

const CounterPage = () => {
  return (
    <div>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <Counter />
        </div>
    </div>
  );
};

export default CounterPage;
