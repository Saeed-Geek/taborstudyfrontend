import React from 'react'

export default function page(){
  return (
     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold text-gray-800">
        Welcome  🎉
      </h1>
      <button
        
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
      >
        Logout
      </button>
    </div>
  )
}

