'use client';
import React,{useState} from 'react'
import Image from 'next/image'
import InputField from '@/components/ui/InputField'
import Checkbox from '@/components/ui/Checbox'
import { Mail } from "lucide-react";
import Button from '@/components/ui/Button'
import { Lock } from 'lucide-react'
import Logo from '@/components/icons/Logo'
import Star from '@/components/icons/Star'
import Big_Star from '@/components/icons/Big_Star'
import Line from '@/components/icons/Line';
import { ChevronLeft, ChevronRight } from "lucide-react";

import { useRouter } from 'next/navigation';
export default function page(){
   const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return alert('Please enter your email');

    setLoading(true);
    try {
      const res = await fetch(`https://taborstudybackend-production.up.railway.app/auth/forgot-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      setLoading(false);

      if (res.ok) {
        // store email for OTP verification
        localStorage.setItem('resetEmail', email);
          localStorage.setItem('resetToken', data.token);
        router.push('/otp-verify');
      } else {
        alert(data.message || 'Failed to send OTP');
      }
    } catch (err) {
      console.error(err);
      setLoading(false);
      alert('Network error, please try again');
    }
  };
  return (
    <div className="p-[24px] lg:p-0  grid grid-cols-1 lg:grid-cols-[42%_1fr]">
      

       <div className="bg-[var(--color-Background-bg-primary)] relative overflow-hidden h-[1000px] hidden lg:block">
         {/* Logo */}
            <div className="ml-[24px] mt-[24px]">
              <Logo />
            </div>
            <div className="absolute top-0 right-0">
              <Big_Star />
            </div>
            <div className="w-[499px]  relative ml-[24px] mt-[60px] z-10">
<div className="w-0 h-85 left-[21px] top-[41px] absolute outline outline-1 outline-offset-[-0.50px] outline-[var(--color-Border-border-primary)]"></div>
<div className="left-0 top-0 absolute inline-flex justify-start items-start gap-2">
<div className="w-10 h-10 px-3.5 py-3 bg-[var(--color-Background-bg-color)] rounded-3xl outline outline-1 outline-offset-[-1px] outline-[var(--color-Border-border-primary)] inline-flex flex-col justify-center items-center gap-2.5">
<div className="justify-start text-white text-sm font-medium font-['Host_Grotesk'] leading-4">01</div>
</div>
<div className="w-60 inline-flex flex-col justify-start items-start gap-2">
<div className="self-stretch justify-start text-[var(--color-Text-primary)] text-lg font-medium font-['Host_Grotesk'] leading-6">Reset your password</div>
<div className="self-stretch justify-start text-[var(--color-Text-secondary)] text-base font-normal font-['Host_Grotesk'] leading-5">We’ll send you a 4-digit code.</div>
</div>
</div>
<div className="left-0 top-[92px] absolute inline-flex justify-start items-start gap-2">
<div className="w-10 h-10 px-3.5 py-3 bg-[var(--color-Background-bg-secondary)] rounded-3xl outline outline-1 outline-offset-[-1px] outline-[var(--color-Border-border-primary)] inline-flex flex-col justify-center items-center gap-2.5">
<div className="justify-start text-[var(--color-Text-secondary)] text-sm font-medium font-['Host_Grotesk'] leading-4">02</div>
</div>
<div className="w-60 inline-flex flex-col justify-start items-start gap-2">
<div className="self-stretch justify-start text-[var(--color-Text-primary)] text-lg font-medium font-['Host_Grotesk'] leading-6">Check your email</div>
<div className="self-stretch justify-start text-[var(--color-Text-secondary)] text-base font-normal font-['Host_Grotesk'] leading-5">Please check your inbox</div>
</div>
</div>
<div className="w-96 left-0 top-[184px] absolute inline-flex justify-start items-start gap-2">
<div className="w-10 h-10 px-3.5 py-3 bg-[var(--color-Background-bg-secondary)] rounded-3xl outline outline-1 outline-offset-[-1px] outline-[var(--color-Border-border-primary)] inline-flex flex-col justify-center items-center gap-2.5">
<div className="justify-start text-[var(--color-Text-secondary)] text-sm font-medium font-['Host_Grotesk'] leading-4">03</div>
</div>
<div className="w-96 inline-flex flex-col justify-start items-start gap-2">
<div className="self-stretch justify-start text-[var(--color-Text-primary)] text-lg font-medium font-['Host_Grotesk'] leading-6">Enter your OTP Verification Code</div>
<div className="w-96 justify-start text-[var(--color-Text-secondary)] text-base font-normal font-['Host_Grotesk'] leading-5">We have sent a verification code to your email.</div>
</div>
</div>
<div className="left-0 top-[276px] absolute inline-flex justify-start items-start gap-2">
<div className="w-10 h-10 px-3.5 py-3 bg-[var(--color-Background-bg-secondary)] rounded-3xl outline outline-1 outline-offset-[-1px] outline-[var(--color-Border-border-primary)] inline-flex flex-col justify-center items-center gap-2.5">
<div className="justify-start text-[var(--color-Text-secondary)] text-sm font-medium font-['Host_Grotesk'] leading-4">04</div>
</div>
<div className="w-60 inline-flex flex-col justify-start items-start gap-2">
<div className="self-stretch justify-start text-[var(--color-Text-primary)] text-lg font-medium font-['Host_Grotesk'] leading-6">Create a new password</div>
<div className="self-stretch justify-start text-[var(--color-Text-secondary)] text-base font-normal font-['Host_Grotesk'] leading-5">Must be at least 8 characters.</div>
</div>
</div>
<div className="w-[499px] left-0 top-[368px] absolute inline-flex justify-start items-start gap-2">
<div className="w-10 h-10 px-3.5 py-3 bg-[var(--color-Background-bg-secondary)] rounded-3xl outline outline-1 outline-offset-[-1px] outline-[var(--color-Border-border-primary)] inline-flex flex-col justify-center items-center gap-2.5">
<div className="justify-start text-[var(--color-Text-secondary)] text-sm font-medium font-['Host_Grotesk'] leading-4">05</div>
</div>
<div className="w-96 inline-flex flex-col justify-start items-start gap-2">
<div className="w-72 justify-start text-[var(--color-Text-primary)] text-lg font-medium font-['Host_Grotesk'] leading-6">Password Change Successfully</div>
<div className="w-96 justify-start text-[var(--color-Text-secondary)] text-base font-normal font-['Host_Grotesk'] leading-5">Password change successfully Click to log in magically.</div>
</div>
</div>
</div>
<div className=" relative w-full min-h-screen h-[900px] ">
  <div className="absolute bottom-0">
    <Line />
  </div>
     <div className="absolute bottom-15 left-1/2 transform -translate-x-1/2">
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
                <div className="w-6 h-2 relative bg-[var(--color-Border-border-focused)] rounded-2xl"></div>
                <div className="w-6 h-2 relative bg-[var(--color-Border-border-color)] rounded-2xl"></div>
                
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
       <div className="right flex items-center justify-center">
           <div className=" max-w-[506px] w-full rounded-2xl border border-[var(--color-Border-border-primary)] shadow-[0px_4px_4px_0px_rgba(240,237,246,1),2px_0px_2px_0px_rgba(242,237,253,1),-2px_0px_2px_0px_rgba(242,237,253,1)] overflow-hidden">
    
          {/* LOGO*/}
 <div className="h-[187px]  w-full relative overflow-hidden bg-gradient-to-b from-[#E0D1FF] to-[#FFFFFF] flex justify-center items-center">
                <Image src="/images/Background_pattern_decorative.png" width={480} height={150} alt="email" className=' absolute top-0 left-0  z-10 opacity-50'/>
                <div className=" relative z-20 w-[79px] h-[79px] rounded-full bg-gradient-to-b from-[#FFFFFF] to-[#E0D1FF] flex items-center justify-center p-[13px]">
                    <div className=" w-full h-full rounded-full bg-[var(--color-Background-bg-color)] flex items-center justify-center">
                    <Image src="/images/Lock.svg" width={24} height={24} alt="email" />
                    </div>
                </div>
              </div>
    
          {/* LOGO */}
          {/* FORM */}
          <div className="form p-[24px]">
            <div className="txt text-center my-[24px]">
              <h1 className='heading-h5 mb-[12px]'>Forgot Password</h1>
              <p className='medium-regular'>Enter your email for instructions.</p>
            </div>
            <form onSubmit={handleSubmit}>
              
           <div className="email w-full">
              <InputField label='Email' type='email'  placeholder="Enter your email"  leftIcon={<Mail size={16} />}  onChange={(e) => setEmail(e.target.value)}/>
            </div>
            
    
     
      <Button type="submit" variant="primary"  label='Forgot Password'  />
      <Button variant='secondary' label='Back to Sign In' href='/login'/>
        
    </form>
    
          </div>
    
          {/* FORM */}  
        </div>
       </div>
        </div>
  )
}


