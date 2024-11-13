import React from 'react'
import { useNavigate } from 'react-router-dom'

function HomePage() {
    const navigate = useNavigate();

    function counter() {
        navigate('/counter')
    }
  return (
    <div>
      <div className="flex flex-col items-center space-y-4 p-8 border rounded-lg shadow-md mx-auto">
      <div className="flex space-x-4">
        <button
          onClick={counter}
          className="px-4 py-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600"
        >
          Counter
        </button>
      </div>
    </div>
    </div>
  )
}

export default HomePage
