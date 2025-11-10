'use client';
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import InputField from '@/components/ui/InputField'
import Checkbox from '@/components/ui/Checbox'
import { Mail } from "lucide-react";
import Button from '@/components/ui/Button'
import { Lock } from 'lucide-react'
import Logo from '@/components/icons/Logo'
import Big_Star from '@/components/icons/Big_Star'
import Line from '@/components/icons/Line';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

export default function page() {
   const [otp, setOtp] = useState(["", "", "", ""]);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Load stored email
  useEffect(() => {
    const storedEmail = localStorage.getItem('resetEmail');
    if (!storedEmail) {
      router.push('/forgot-password');
      return;
    }
    setEmail(storedEmail);
  }, [router]);

  const handleChange = (value: string, index: number) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // auto move to next input
      if (value && index < 3) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  const code = otp.join('');

  if (code.length !== 4) return alert('Please enter all 4 digits');

  const token = localStorage.getItem('resetToken'); // ✅ from previous step
  if (!token) return alert('Missing reset token. Please restart reset flow.');

  setLoading(true);
  try {
    const res = await fetch(`https://taborstudybackend-production.up.railway.app/auth/verify-otp`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token, otp: code }),
    });
     console.log(token)
    const data = await res.json();
    setLoading(false);

    if (res.ok) {
      // ✅ store new token if backend returns one for reset-password step
      localStorage.setItem('verifiedToken', data.token);
      router.push('/create-new-password');
    } else {
      alert(data.message || 'Invalid OTP');
    }
  } catch (err) {
    console.error(err);
    setLoading(false);
    alert('Network error, please try again');
  }
};

  return (
     <div className="p-[24px] lg:p-0 grid grid-cols-1 lg:grid-cols-[40%_1fr]">
            <div className="bg-[var(--color-Background-bg-primary)] relative overflow-hidden h-[1000px] hidden lg:block">
                            {/* Logo */}
                               <div className="ml-[24px] mt-[24px]">
                                 <Logo />
                               </div>
                               <div className="absolute top-0 right-0">
                                 <Big_Star />
                               </div>
<div className="w-[499px]  relative ml-[24px] mt-[60px] z-10">
<div className="w-0 h-60 left-[21px] top-[41px] absolute outline outline-1 outline-offset-[-0.50px] outline-[var(--color-Border-border-primary)]"></div>
<div className="left-0 top-0 absolute inline-flex justify-start items-start gap-2">
<div className="w-10 h-10 px-3.5 py-3 bg-[var(--color-Background-bg-secondary)] rounded-3xl outline outline-1 outline-offset-[-1px] outline-[var(--color-Border-border-primary)] inline-flex flex-col justify-center items-center gap-2.5">
<div className="justify-start text-[var(--color-Text-secondary)] text-sm font-medium font-['Host_Grotesk'] leading-4">01</div>
</div>
<div className="w-60 inline-flex flex-col justify-start items-start gap-2">
<div className="self-stretch justify-start text-[var(--color-Text-primary)] text-lg font-medium font-['Host_Grotesk'] leading-6">Reset your password</div>
<div className="self-stretch justify-start text-[var(--color-Text-secondary)] text-base font-normal font-['Host_Grotesk'] leading-5">We’ll send you a 4-digit code.</div>
</div>
</div>
<div className="w-96 left-0 top-[92px] absolute inline-flex justify-start items-start gap-2">
<div className="w-10 h-10 px-3.5 py-3 bg-[var(--color-Background-bg-color)] rounded-3xl outline outline-1 outline-offset-[-1px] outline-[var(--color-Border-border-primary)] inline-flex flex-col justify-center items-center gap-2.5">
<div className="justify-start text-white text-sm font-medium font-['Host_Grotesk'] leading-4">02</div>
</div>
<div className="w-96 inline-flex flex-col justify-start items-start gap-2">
<div className="self-stretch justify-start text-[var(--color-Text-primary)] text-lg font-medium font-['Host_Grotesk'] leading-6">Enter your OTP Verification Code</div>
<div className="w-96 justify-start text-[var(--color-Text-secondary)] text-base font-normal font-['Host_Grotesk'] leading-5">We have sent a verification code to your email.</div>
</div>
</div>
<div className="left-0 top-[184px] absolute inline-flex justify-start items-start gap-2">
<div className="w-10 h-10 px-3.5 py-3 bg-[var(--color-Background-bg-secondary)] rounded-3xl outline outline-1 outline-offset-[-1px] outline-[var(--color-Border-border-primary)] inline-flex flex-col justify-center items-center gap-2.5">
<div className="justify-start text-[var(--color-Text-secondary)] text-sm font-medium font-['Host_Grotesk'] leading-4">03</div>
</div>
<div className="w-60 inline-flex flex-col justify-start items-start gap-2">
<div className="self-stretch justify-start text-[var(--color-Text-primary)] text-lg font-medium font-['Host_Grotesk'] leading-6">Create a new password</div>
<div className="self-stretch justify-start text-[var(--color-Text-secondary)] text-base font-normal font-['Host_Grotesk'] leading-5">Must be at least 8 characters.</div>
</div>
</div>
<div className="w-[499px] left-0 top-[276px] absolute inline-flex justify-start items-start gap-2">
<div className="w-10 h-10 px-3.5 py-3 bg-[var(--color-Background-bg-secondary)] rounded-3xl outline outline-1 outline-offset-[-1px] outline-[var(--color-Border-border-primary)] inline-flex flex-col justify-center items-center gap-2.5">
<div className="justify-start text-[var(--color-Text-secondary)] text-sm font-medium font-['Host_Grotesk'] leading-4">04</div>
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
                                   
                                   
                                   <div className="w-6 h-2 relative bg-[var(--color-Border-border-focused)] rounded-2xl"></div>
                             
                                   <div className="w-6 h-2 relative bg-[var(--color-Border-border-focused)] rounded-2xl"></div>
                                         <div className="w-6 h-2 relative bg-[var(--color-Border-border-color)] rounded-2xl"></div>
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
                <div className="max-w-[506px] w-full rounded-2xl border border-[var(--color-Border-border-primary)] shadow-[0px_4px_4px_0px_rgba(240,237,246,1),2px_0px_2px_0px_rgba(242,237,253,1),-2px_0px_2px_0px_rgba(242,237,253,1)] overflow-hidden">
        
              {/* LOGO*/}
              <div className="h-[187px]  w-full relative overflow-hidden bg-gradient-to-b from-[#E0D1FF] to-[#FFFFFF] flex justify-center items-center">
                <Image src="/images/Background_pattern_decorative.png" width={480} height={150} alt="email" className=' absolute top-0 left-0  z-10 opacity-50'/>
                <div className=" relative z-20 w-[79px] h-[79px] rounded-full bg-gradient-to-b from-[#FFFFFF] to-[#E0D1FF] flex items-center justify-center p-[13px]">
                    <div className=" w-full h-full rounded-full bg-[var(--color-Background-bg-color)] flex items-center justify-center">
                    <Image src="/images/email_document_2.svg" width={24} height={24} alt="email" />
                    </div>
                </div>
              </div>
        
              {/* LOGO */}
              {/* FORM */}
              <div className="form p-[24px]">
                <div className="txt text-center mb-[24px]">
                  <h1 className='heading-h5 mb-[12px]'>OTP Verification</h1>
                  <p className='medium-regular'>We have sent a verification code to email address</p>
                    <p className='text-[16px] leading-[20px] font-bold text-[var(--color-Text-secondary)]'>{email} <span className='text-[var(--color-Button-primary)] '>Wrong Email?</span></p>

                </div>
<div className="flex justify-between items-center gap-2">
  {otp.map((digit, i) => (
    <input
      key={i}
      type="text"
      maxLength={1}
      inputMode="numeric"
      value={digit}
      onChange={(e) => handleChange(e.target.value, i)}
      id={`otp-${i}`}
      className="w-14 px-3 py-2 bg-[var(--color-Background-bg-secondary)] focus:bg-[var(--color-Background-bg-secondary-hover)] focus:text-primary rounded-lg outline outline-1 outline-offset-[-1px] outline-[var(--color-Border-border-primary)] flex justify-center items-center gap-2 overflow-hidden text-center text-Text-primary text-sm font-medium font-['Host_Grotesk'] leading-5 focus:outline-Primary-600 focus:outline-2 focus:bg-Background-bg-secondary-hover"
    />
  ))}
</div>
                <form action="">
          <Button  variant="primary"  label='Submit' onClick={handleSubmit} />
            
        </form>
            <h1 className='text-[var(--color-text-primary)] medium-regular text-center '  style={{ marginTop: '24px' }}>Didn’t received the email? <span className='text-[var(--color-Button-primary)] font-semibold'>Resend</span></h1>
        
              </div>
        
              {/* FORM */}  
            </div>
            </div>
            </div>
  )
}


