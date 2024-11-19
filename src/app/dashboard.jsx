// // app/dashboard.jsx
// export default function Dashboard() {
//     return (
//       <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//         <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
//           <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Welcome to Your Dashboard</h2>
//           <p className="text-center text-gray-600">You are logged in and ready to go!</p>
//         </div>
//       </div
  import React from 'react'
  
  const dashboard = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Welcome to Your Dashboard</h2>
          <p className="text-center text-gray-600">You are logged in and ready to go!</p>
        </div>
      </div>
    )
  }
  
  export default dashboard