import React from 'react'
import Image from 'next/image'
import InputField from '@/components/ui/InputField'
import Button from '@/components/ui/Button'
import { Lock } from 'lucide-react'
import Logo from '@/components/icons/Logo'
import Big_Star from '@/components/icons/Big_Star'
import Line from '@/components/icons/Line'
import {ChevronLeft, ChevronRight} from "lucide-react";
export default function Page() {
  return (
    <div className="p-[24px] lg:p-0 min-h-screen grid grid-cols-1 lg:grid-cols-[40%_1fr]">
      {/* Left Section */}
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
<div className="w-10 h-10 px-3.5 py-3 bg-[var(--color-Background-bg-secondary)]  rounded-3xl outline outline-1 outline-offset-[-1px] outline-[var(--color-Border-border-primary)] inline-flex flex-col justify-center items-center gap-2.5">
<div className="justify-start text-[var(--color-Text-secondary)] text-sm font-medium font-['Host_Grotesk'] leading-4">01</div>
</div>
<div className="w-60 inline-flex flex-col justify-start items-start gap-2">
<div className="self-stretch justify-start text-[var(--color-Text-primary)] text-lg font-medium font-['Host_Grotesk'] leading-6">Reset your password</div>
<div className="self-stretch justify-start text-[var(--color-Text-secondary)] text-base font-normal font-['Host_Grotesk'] leading-5">We’ll send you a 4-digit code.</div>
</div>
</div>
<div className="w-96 left-0 top-[92px] absolute inline-flex justify-start items-start gap-2">
<div className="w-10 h-10 px-3.5 py-3 bg-[var(--color-Background-bg-secondary)] rounded-3xl outline outline-1 outline-offset-[-1px] outline-[var(--color-Border-border-primary)] inline-flex flex-col justify-center items-center gap-2.5">
<div className="justify-start text-[var(--color-Text-secondary)] text-sm font-medium font-['Host_Grotesk'] leading-4">02</div>
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
<div className="w-10 h-10 px-3.5 py-3 bg-[var(--color-Background-bg-color)] rounded-3xl outline outline-1 outline-offset-[-1px] outline-[var(--color-Border-border-primary)] inline-flex flex-col justify-center items-center gap-2.5">
<div className="justify-start text-white text-sm font-medium font-['Host_Grotesk'] leading-4">04</div>
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
                                               <div className="w-6 h-2 relative bg-[var(--color-Border-border-focused)] rounded-2xl"></div>
                                               <div className="w-6 h-2 relative bg-[var(--color-Border-border-focused)] rounded-2xl"></div>
                                                <div className="w-6 h-2 relative bg-[var(--color-Border-border-color)] rounded-2xl"></div>
                                         
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

      {/* Right Section */}
      <div className="flex justify-center items-center">
        <div className=" max-w-[506px] w-full rounded-2xl border border-[var(--color-Border-border-primary)] shadow-[0px_4px_4px_0px_rgba(240,237,246,1),2px_0px_2px_0px_rgba(242,237,253,1),-2px_0px_2px_0px_rgba(242,237,253,1)] overflow-hidden w-full max-w-[506px]">
          
          {/* IMAGE SECTION */}
          <div className="h-[303px] relative flex justify-center items-center">
            <div className="absolute inset-0 z-10">
              <Image
                src="/images/Background_pattern_decorative.png"
                width={480}
                height={150}
                alt="email"
                className="w-full h-full object-cover"
              />
            </div>
            <Image
              src="/images/Empty_state.png"
              width={400}
              height={400}
              alt="empty_state"
              className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-20"
            />
          </div>

          {/* CONTENT */}
          <div className="p-6 pt-0 text-center">
            <h1 className="heading-h5   font-semibold mb-3">
              Well Done! Your Password  Changed Successfully
            </h1>
            <p className="medium-regular text-[var(--color-Text-secondary)] mb-6 ">
              Always remember your password for  your Tabor Study account.
            </p>

            <Button variant="primary" label="Back to Sign In" href='/login' />
          </div>
        </div>
      </div>
    </div>
  )
}
