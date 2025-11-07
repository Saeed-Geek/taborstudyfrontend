'use client';

import React, { useState, useCallback, useMemo } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import InputField from '@/components/ui/InputField';
import Checkbox from '@/components/ui/Checbox';
import Button from '@/components/ui/Button';
import { Mail, Lock, ChevronLeft, ChevronRight, UsbIcon, UserIcon } from 'lucide-react';
import Logo from '@/components/icons/Logo';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// ✅ Lazy-load the heavy SVGs
const DecorativeMask = dynamic(() => import('@/components/icons/DecorativeMask'), { ssr: false} );
const Sign_Up_Card = dynamic(() => import('@/components/icons/Sign_Up_Card'), { ssr: false } );
const Profile = dynamic(() => import('@/components/icons/Profile'), { ssr: false } );
const Star = dynamic(() => import('@/components/icons/Star'), { ssr: false });
const Card_4_SignUp = dynamic(() => import('@/components/icons/Card_4_Sign_Up'), { ssr: false } );
const Card_5_SignUp = dynamic(() => import('@/components/icons/Card_5_Sign_up'), { ssr: false } );
export default function page(){
 const router = useRouter();

  const [fullName, setFullName] = useState('');
  const [email, setEmail]     = useState('');
  const [password, setPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [loading, setLoading] = useState(false);

  // ✅ memoized icons (avoids rerendering)
  const MailIcon = useMemo(() => <Mail size={16} />, []);
  const LockIcon = useMemo(() => <Lock size={16} />, []);
const UIcon  = useMemo(() => <UserIcon size={16} />, []);
  // ✅ useCallback avoids recreation on re-renders

  const handleSignup = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      if (!agreeTerms) {
        alert('You must agree to the terms and privacy policy.');
        return;
      }

      setLoading(true);

      try {
        const res = await fetch(`http://localhost:3000/auth/signup`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ fullName, email, password }),
        });

        setLoading(false);

        if (res.ok) {
          router.push('/check-email?signup=success');
          return;
        }

        const data = await res.json();
        alert(data.message || 'Signup failed');
      } catch {
        alert('Network error');
        setLoading(false);
      }
    },
    [fullName, email, password, agreeTerms, router],
  );
  return (
    <div className="grid min-h-screen grid-cols-1 md:grid-cols-[1fr_666px] bg-white">
           {/* LEFT SIDE */}
              <div className="bg-[var(--color-Background-bg-primary-hover)] flex flex-col">
                {/* Logo */}
                <div className="ml-[24px] mt-[24px]">
                  <Logo />
                </div>
        
                {/* Text Section */}
                <div className="text-center mt-[80px] w-full px-[clamp(16px,6vw,80px)]">
                  <h1 className="heading-h3 w-full">
                    Secure Your Tabor Study Online Exam System – Please Sign Up
                  </h1>
                  <p className="small-regular mt-[24px] w-full">
                    Access your personalized online learning and examination portal with Tabor Study. Sign Up to track progress, take exams, and enhance your knowledge anytime, anywhere.
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
              {/* Chart */}
              <div className="relative z-1">
                <Sign_Up_Card />
              </div>
        
              {/* Overlapping cards */}
              <div className="absolute -top-25 -left-10 z-1">
                <Profile />
              </div>
              <div className="absolute -bottom-7 -right-10 z-0 ">
                <Star />
              </div>
              <div className="absolute -top-25 -right-20 z-2">
                <Card_4_SignUp />
              </div>
              <div className="absolute -bottom-45 -left-30 z-2">
                <Card_5_SignUp />
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
              <div className="w-6 h-2 relative bg-[var(--color-Border-border-focused)] rounded-2xl"></div>

              <div className="w-6 h-2 relative bg-[var(--color-Border-border-color)] rounded-2xl"></div>
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
          <div className="right md:px-[86px] md:py-[166px] flex items-center justify-center">
            <div className="w-full max-w-[480px] rounded-2xl border border-[var(--color-Border-border-primary)] shadow-[0px_4px_4px_0px_rgba(240,237,246,1),2px_0px_2px_0px_rgba(242,237,253,1),-2px_0px_2px_0px_rgba(242,237,253,1)] overflow-hidden">
    
          {/* LOGO*/}
 <div className="h-[187px]  w-full relative overflow-hidden bg-gradient-to-b from-[#E0D1FF] to-[#FFFFFF] flex justify-center items-center">
                <Image src="/images/Background_pattern_decorative.png" width={480} height={150} alt="email" className=' absolute top-0 left-0  z-10 opacity-50' />
                <div className=" relative z-20 w-[79px] h-[79px] rounded-full bg-gradient-to-b from-[#FFFFFF] to-[#E0D1FF] flex items-center justify-center p-[13px]">
                    <div className=" w-full h-full rounded-full bg-[var(--color-Background-bg-color)] flex items-center justify-center">
                    <Image src="/images/Profile.svg" width={24} height={24} alt="email" />
                    </div>
                </div>
              </div>
    
          {/* LOGO */}
          {/* FORM */}
          <div className="form p-[24px]">
            <div className="txt text-center mb-[24px]">
              <h1 className='heading-h5 mb-[12px]'>Create your account</h1>
              <p className='medium-regular'>Let’s get started with your 30 days <br/> free trial.</p>
            </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-[24px]">
                          {[
                            { src: '/images/gmail.svg', label: 'Google' },
                            { src: '/images/facebook.svg', label: 'Facebook' },
                          ].map(({ src, label }) => (
                            <button
                              key={label}
                              className="w-full rounded-[8px] p-[8px] border border-[var(--color-Border-border-primary)] hover:bg-[var(--color-Background-bg-primary-hover)] transition"
                            >
                              <div className="flex justify-center items-center gap-[6px]">
                                <Image src={src} width={15} height={15} alt={label} />
                                <span className="button-button">{label}</span>
                              </div>
                            </button>
                          ))}
                        </div>
                      <div className="flex justify-center items-center gap-2 my-[24px]">
              <div className="h-[1px] border border-[var(--color-Border-border-primary)] w-full"></div>
              <span className="small-regular whitespace-nowrap">Or Sign Up</span>
              <div className="h-[1px] border border-[var(--color-Border-border-primary)] w-full"></div>
            </div>
            <form onSubmit={handleSignup}>
              <div className="name w-full mb-[16px]">
              <InputField label='Full Name' type='text'  placeholder="Enter your name" value={fullName} leftIcon={UIcon} onChange={(e) => setFullName(e.target.value)} />
            </div>
           <div className="email w-full mb-[16px]">
              <InputField label='Email' type='email'  placeholder="Enter your email" value={email}  leftIcon={MailIcon} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="password w-full">
              <InputField label='Password' type='password'  placeholder="Enter your password" value={password} leftIcon={LockIcon}  onChange={(e) => setPassword(e.target.value)}/>
            </div>
              <div className="bottom  flex justify-between mt-[4px]">
              <div className="sav flex items-center gap-2">
                <Checkbox id="save"  onChange={(e) => setAgreeTerms(e.target.checked)} />
                <label htmlFor="save" className="text-sm text-[var(--color-Text-primary)]">
                  I agree to all Term, Privacy Policy and ....
                </label> 
              </div>
            </div>
    
     
      <Button  variant="primary"  label='Sign Up'   />
        
    </form>
        <h1 className='text-[var(--color-text-primary)] medium-regular text-center mt-[24px]'>Already have an account? <Link href="/login"><span className='text-[var(--color-Button-primary)] font-semibold'>Sign In</span></Link> </h1>
    
          </div>
    
          {/* FORM */}  
        </div>
          </div>
        </div>
  )
}


