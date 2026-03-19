"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import CalendarPicker from '@/components/CalendarPicker';

const details = [
    'Quick overview of your brand and current email strategy',
    'Biggest challenges or pain points you’re seeing with retention',
    'Quick wins or fixes you can implement right away',
    'Goals you have for email/SMS revenue growth',
];

const CallScheduling = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <section className="relative mx-auto w-full  px-4 py-14 sm:py-24 overflow-hidden">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-9.25 lg:gap-16 items-start">

                <div className="space-y-4 order-1">
                    <div className="space-y-3">
                        <h2 className="text-3xl font-semibold text-background sm:text-[32px]">
                            Ready to Unlock
                        </h2>
                        <h2 className="text-3xl font-semibold text-gradient-main sm:text-[32px]">
                            Predictable Revenue Growth?
                        </h2>
                        <p className="text-lg text-primary font-normal">
                            Let&apos;s build a retention system that works 24/7.
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="h-14 w-14 overflow-hidden rounded-full border border-white/10 bg-[#111827]">
                            <Image src="/assets/icons/profile.svg" alt="avatar" width={56} height={56} className="object-cover" />
                        </div>
                        <div className="flex flex-col">
                            <h2 className='text-[14px] font-normal text-[#99A1AF]'>BR Funnels</h2>
                            <p className="text-lg font-semibold text-background">Growth Strategy Team</p>
                        </div>
                    </div>

                    <div className="space-y-2 text-primary">
                        <h2 className='sm:text-[26px] text-base font-medium text-background'>Strategy Call</h2>
                        <div className="flex items-center gap-3 font-medium">
                            <Image src="/assets/icons/clock.svg" alt="clock" width={30} height={30} className="opacity-60" />
                            <span className='text-primary text-[14px] font-normal'>30 minutes</span>
                        </div>
                        <div className="flex items-center gap-3 font-medium leading-relaxed">
                            <Image src="/assets/icons/recording.svg" alt="video" width={30} height={30} className="opacity-60" />
                            <span className='text-primary text-[14px] font-normal'>Web conferencing details provided upon confirmation.</span>
                        </div>
                    </div>

                    <div className='rounded-[15.08px] border-[0.754px] border-white/5 bg-white/2 p-6'>
                        <p className="text-base font-normal text-[#D1D5DC] max-w-md">
                            This is a 30-minute call to discuss how we can help scale your email and SMS marketing.
                        </p>

                        <div className="space-y-5 mt-6">
                            {details.map((item) => (
                                <div key={item} className="flex items-center gap-4 group">
                                    <div className="mt-1 flex shrink-0 items-center justify-center rounded-full ">
                                        <Image src="/assets/icons/goal.svg" alt="check" width={30} height={30} />
                                    </div>
                                    <span className="text-[13px] font-medium text-primary">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <p className="text-sm text-primary font-normal pt-3">
                        • No commitment required • 100% free consultation
                    </p>
                </div>

                <div className="order-2 flex flex-col items-center lg:items-end w-full">
                    <CalendarPicker />

                    <div className="w-full max-w-170 mt-6">
                        <button className="w-full lg:w-auto  lg:ml-auto px-10 py-4 bg-gradient-horizontal cursor-pointer rounded-[14px] flex items-center justify-center gap-3 text-background font-semibold text-base ">
                            Schedule a Call
                            <Image src="/assets/icons/Arrow.svg" alt="check" width={20} height={20} />
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CallScheduling;