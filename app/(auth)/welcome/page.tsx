'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
export default function WelcomePage() {
  const router = useRouter();
    const [userName, setUserName] = useState('');
  
    useEffect(() => {
      const storedName = localStorage.getItem('userName');
      if (!storedName) {
        router.push('/login'); // Redirect to login if not logged in
      } else {
        setUserName(storedName);
      }
    }, [router]);
  
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <h1 className="text-4xl font-bold text-gray-800">
          Welcome {userName}! 🎉
        </h1>
        <button
          onClick={async () => {
            const refreshToken = localStorage.getItem("refreshToken");
                console.log(refreshToken)
            await fetch("https://taborstudybackend-production.up.railway.app/auth/logout", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ refreshToken }),
            credentials: "include",
            });
            localStorage.clear();
            router.push('/login');
          }}
          className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
        >
          Logout
        </button>
      </div>
    );
}

