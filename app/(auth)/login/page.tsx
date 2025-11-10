'use client';

import React, { useState, useCallback, useMemo } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { ChevronLeft, ChevronRight, Mail, Lock } from 'lucide-react';
import InputField from '@/components/ui/InputField';
import Checkbox from '@/components/ui/Checbox';
import Button from '@/components/ui/Button';
import Logo from '@/components/icons/Logo';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// ✅ Lazy-load HEAVY non-critical components
const Chart = dynamic(() => import('@/components/icons/Chart'), { ssr: false });
const Card_1 = dynamic(() => import('@/components/icons/Card_1'), { ssr: false });
const Card_4 = dynamic(() => import('@/components/icons/Card_4'), { ssr: false });
const Union = dynamic(() => import('@/components/icons/Union'), { ssr: false });
const DecorativeMask = dynamic(() => import('@/components/icons/DecorativeMask'), { ssr: false });
const Ellipse = dynamic(() => import('@/components/icons/Ellipse'), { ssr: false });
export default function Page() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // ✅ Avoid re-creating icons every render
  const MailIcon = useMemo(() => <Mail size={16} />, []);
  const LockIcon = useMemo(() => <Lock size={16} />, []);

  // ✅ useCallback prevents re-render of form component
  const handleSignIn = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);

      try {
        const res = await fetch(`https://taborstudybackend-production.up.railway.app/auth/signin`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
          credentials: 'include',
        });

        const data = await res.json();
        setLoading(false);

        if (!res.ok) return alert(data.message || 'Login failed');

        // document.cookie = `accessToken=${data.accessToken}; path=/; max-age=86400; SameSite=Lax`;
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);
        localStorage.setItem('userName', data.user.name);

        router.push('/greet');
      } catch (err) {
        console.error(err);
        alert('Network error');
        setLoading(false);
      }
    },
    [email, password, router]
  );
  return (
    <div className="p-[24px] lg:p-0 grid min-h-screen grid-cols-1 lg:grid-cols-[1fr_666px] bg-white">
      {/* LEFT SIDE */}
      <div className="bg-[var(--color-Background-bg-primary-hover)] flex flex-col h-[1000px] hidden lg:flex">
        {/* Logo */}
        <div className="ml-[24px] mt-[24px]">
          <Logo />
        </div>

        {/* Text Section */}
        <div className="text-center mt-[80px] w-full px-[clamp(16px,6vw,80px)]">
          <h1 className="heading-h3 w-full">
            Secure Your Tabor Study Online Exam System – Please Sign In
          </h1>
          <p className="small-regular mt-[24px] w-full">
            Access your personalized online learning and examination portal with Tabor Study. Sign in to track progress, take exams, and enhance your knowledge anytime, anywhere.
          </p>
        </div>


 <div className="relative w-full h-full overflow-hidden">
  <div className="">
    {/* Background */}
  <div className="absolute inset-0 flex items-center justify-center">
    <DecorativeMask />
  </div>

  {/* Centered Chart with overlapping cards */}
 <div className="absolute inset-0 flex items-center justify-center">
    <div className="relative">
      <div className="relative z-1">
        <Chart />
      </div>

      <div className="absolute top-0 left-15 z-0">
        <Union />
      </div>
      <div className="absolute bottom-30 right-10 z-0">
        <Ellipse />
      </div>
      <div className="absolute -top-25 right-3 z-2">
        <Card_4 />
      </div>
      <div className="absolute -bottom-6 -left-4 z-2">
        <Card_1 />
      </div>
      
    </div> 
  </div>
  
  
  <div className="absolute bottom-20 left-1/2 -translate-x-1/2">
  <div className="inline-flex items-center gap-6">
    {/* Left Icon */}
     <button
      type="button"
      className="w-6 h-6 flex items-center justify-center rounded-full border border-[var(--color-Border-border-focused)] hover:bg-[var(--color-Background-bg-primary-hover)] transition"
    >
      <ChevronLeft className="w-4 h-4 text-[var(--color-Icon-disabled)]" />
    </button>

    {/* Bars */}
    <div className="flex items-center gap-2">
      <div className="w-6 h-2 relative bg-[var(--color-Border-border-color)] rounded-2xl"></div>
      <div className="w-6 h-2 relative bg-[var(--color-Border-border-focused)] rounded-2xl"></div>
      <div className="w-6 h-2 relative bg-[var(--color-Border-border-focused)] rounded-2xl"></div>
      <div className="w-6 h-2 relative bg-[var(--color-Border-border-focused)] rounded-2xl"></div>
      <div className="w-6 h-2 relative bg-[var(--color-Border-border-focused)] rounded-2xl"></div>
      <div className="w-6 h-2 relative bg-[var(--color-Border-border-focused)] rounded-2xl"></div>

    </div>

    {/* Right Icon */}
      <button
      type="button"
      className="w-6 h-6 flex items-center justify-center rounded-full border border-[var(--color-Border-border-focused)] hover:bg-[var(--color-Background-bg-primary-hover)] transition"
    >
      <ChevronRight className="w-4 h-4 text-[var(--color-Icon-primary)]" />
    </button>
  </div>
</div>

  </div>

</div>


      </div>

      {/* RIGHT SIDE */}
      <div className="right  flex items-center justify-center">
        <div className="w-full max-w-[506px] rounded-2xl border border-[var(--color-Border-border-primary)] shadow-[0px_4px_4px_0px_rgba(240,237,246,1),2px_0px_2px_0px_rgba(242,237,253,1),-2px_0px_2px_0px_rgba(242,237,253,1)] overflow-hidden bg-white">
          {/* Header Image */}
          <div className="h-[187px] w-full relative overflow-hidden bg-gradient-to-b from-[#E0D1FF] to-[#FFFFFF] flex justify-center items-center">
            <Image
              src="/images/Background_pattern_decorative.png"
              width={480}
              height={150}
              alt="email"
              className="absolute top-0 left-0 z-10 opacity-50 w-full h-full object-cover"
            />
            <div className="relative z-20 w-[79px] h-[79px] rounded-full bg-gradient-to-b from-[#FFFFFF] to-[#E0D1FF] flex items-center justify-center p-[13px]">
              <div className="w-full h-full rounded-full bg-[var(--color-Background-bg-color)] flex items-center justify-center">
                <Image src="/images/email_document_2.svg" width={24} height={24} alt="email" />
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="form p-[24px]">
            <div className="text-center mb-[24px]">
              <h1 className="heading-h5 md:heading-h4 mb-[12px]">Welcome Back Tabor Study</h1>
              <p className="medium-regular">Welcome back! Please enter your details.</p>
            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-[24px]">
              {[
                { src: '/images/gmail.svg', label: 'Google' },
                { src: '/images/facebook.svg', label: 'Facebook', onClick: () => window.location.href = 'http://localhost:3000/auth/facebook' },
              ].map(({ src, label,onClick }) => (
                <button
                  key={label}
                   onClick={onClick}
                  className="w-full rounded-[8px] p-[8px] border border-[var(--color-Border-border-primary)] hover:bg-[var(--color-Background-bg-primary-hover)] transition"
                >
                  <div className="flex justify-center items-center gap-[6px]">
                    <Image src={src} width={15} height={15} alt={label} />
                    <span className="button-button">{label}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Divider */}
            <div className="flex justify-center items-center gap-2 my-[24px]">
              <div className="h-[1px] border border-[var(--color-Border-border-primary)] w-full"></div>
              <span className="small-regular whitespace-nowrap">Or with email</span>
              <div className="h-[1px] border border-[var(--color-Border-border-primary)] w-full"></div>
            </div>

            {/* Inputs */}
            <form onSubmit={handleSignIn}>
              <div className="mb-[16px]">
                <InputField label="Email" type="email" placeholder="Enter your email" leftIcon={MailIcon} onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div>
                <InputField label="Password" type="password" placeholder="Enter your password" leftIcon={LockIcon} onChange={(e) => setPassword(e.target.value)}/>
              </div>

              {/* Options */}
              <div className="flex justify-between items-center mt-[4px]">
                <div className="flex items-center gap-2">
                  <Checkbox id="save" />
                  <label htmlFor="save" className="text-sm text-[var(--color-text-primary)]">
                    Save account
                  </label>
                </div>
                <Link
                  href="/reset-password"
                  className="text-sm font-medium underline text-[var(--color-Button-primary)] hover:opacity-80 transition"
                >
                  Forgot Password?
                </Link>
              </div>

              {/* Submit */}
              <div className="mt-[24px]">
                <Button
                  leftIcon={<ChevronLeft size={20} className="text-General-White" />}
                  rightIcon={<ChevronRight size={20} className="text-General-White" />}
                  variant="primary"
                  label="Sign In"
                />
              </div>
            </form>

            {/* Footer */}
            <h1 className="text-[var(--color-text-primary)] medium-regular text-center mt-[24px]">
              Don’t have an account?{' '}
              <Link href="/register" >
              <span className="text-[var(--color-Button-primary)] underline cursor-pointer hover:opacity-80 transition">
                Create now
              </span>
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}
