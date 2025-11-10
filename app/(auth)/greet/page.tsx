'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const refreshToken = localStorage.getItem('refreshToken');

      if (refreshToken) {
        // Call backend logout endpoint with DTO
        await fetch('https://taborstudybackend-production.up.railway.app/auth/logout', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ refreshToken }), // send DTO
        });
      }

      // Clear localStorage
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('userName');

      // Redirect to login
      router.push('/login');
    } catch (err) {
      console.error('Logout failed', err);
      alert('Network error while logging out');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold text-gray-800">
        Welcome 🎉
      </h1>
      <button
        onClick={handleLogout}
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
      >
        Logout
      </button>
    </div>
  );
}
