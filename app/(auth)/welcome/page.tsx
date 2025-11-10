'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function WelcomePage() {
  const router = useRouter();
  const [userName, setUserName] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const checkAuth = async () => {
  //     try {
  //       const res = await fetch(
  //         'https://taborstudybackend-production.up.railway.app/auth/me',
  //         { credentials: 'include' } // ✅ send cookies
  //       );
  //         console.log(res);
  //       if (!res.ok) {
  //         router.push('/welcome');
  //         return;
  //       }

  //       const data = await res.json();
  //       setUserName(data.user.name);
  //     } catch {
  //       router.push('/welcome');
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   checkAuth();
  // }, [router]);

  if (loading) return <div>Loading...</div>;

  // const handleLogout = async () => {
  //   await fetch('https://taborstudybackend-production.up.railway.app/auth/logout', {
  //     method: 'POST',
  //     credentials: 'include', // send cookies
  //   });
  //   router.push('/welcome');
  // };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold text-gray-800">
        Welcome {userName}! 🎉
      </h1>
      <button
        
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
      >
        Logout
      </button>
    </div>
  );
}
