import React from 'react';
import Counter from '../components/Counter';
import Header from '../components/Header';

const CounterPage = () => {
  return (
    <div>
        <Header />
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <Counter />
        </div>
    </div>
  );
};

export default CounterPage;
