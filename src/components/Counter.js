import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount, selectCount, decrementByAmount, resetAmount } from '../redux/slices/counterSlice';

const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center space-y-4 p-8 border rounded-lg shadow-md mx-auto">
      <h1 className="text-2xl font-semibold">Counter: {count}</h1>
      <div className="flex space-x-4">
        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 bg-red-500 text-white font-medium rounded hover:bg-red-600"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch(incrementByAmount(5))}
          className="px-4 py-2 bg-green-500 text-white font-medium rounded hover:bg-green-600"
        >
          Increment by 5
        </button>
        <button
          onClick={() => dispatch(decrementByAmount(5))}
          className="px-4 py-2 bg-yellow-500 text-white font-medium rounded hover:bg-yellow-600"
        >
          Decrement by 5
        </button>
        <button
          onClick={() => dispatch(resetAmount())}
          className="px-4 py-2 bg-gray-500 text-white font-medium rounded hover:bg-gray-600"
        >
          Reset Counter
        </button>
      </div>
    </div>
  );
};

export default Counter;
