import React from 'react';
import Image from 'next/image';

const steps = [
    { icon: '/assets/icons/Search.svg', title: 'Audit & Analysis', desc: 'Deep dive into your current email performance and revenue opportunities' },
    { icon: '/assets/icons/mapping.svg', title: 'Strategy Mapping', desc: 'Custom funnel architecture designed for your business model' },
    { icon: '/assets/icons/flows.svg', title: 'Build Core Flows', desc: 'High-converting automated flows that drive revenue on autopilot' },
    { icon: '/assets/icons/Setting.svg', title: 'Monthly Email Campaigns', desc: 'Strategic campaigns designed to boost engagement and sales' },
    { icon: '/assets/icons/Performance-icon2.svg', title: 'Monthly Reporting', desc: 'Clear performance insights with ongoing optimization' },
];

const Revenue = () => {
    return (
        <section className="relative mx-auto w-full max-w-6xl px-4 py-14 sm:py-24">
            <div className="text-center mb-16">
                <h2 className="text-[24px] font-semibold text-background sm:text-[32px]">Our 5-Step Revenue Framework</h2>
                <p className="mx-auto max-w-6xl text-sm font-medium text-primary sm:text-lg">
                    A proven system that transforms email from an expense into a profit center.
                </p>
            </div>

            <div className="relative mt-20">
                <div className="hidden md:block absolute top-10 left-1/2 -translate-x-1/2 w-0.5 h-[80%] bg-gradient-purplish md:top-12 md:left-0 md:translate-x-0 md:w-full md:h-1 md:bg-linear-to-r md:from-transparent md:via-blue-500/40 md:to-transparent" />

                <div className="relative grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-4">
                    {steps.map((step, idx) => (
                        <div key={idx} className="flex flex-col items-center group">

                            {/* ICON CONTAINER */}
                            <div className="relative z-10 flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-gradient-purplish shadow-[0_0_40px_rgba(124,58,237,0.5)] ">

                                {/* STEP NUMBER (Badge) */}
                                <div className="absolute -top-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full  bg-gradient-main text-[11px] font-bold text-background shadow-md">
                                    {idx + 1}
                                </div>

                                {/* ICON */}
                                <div className="relative h-10 w-10 sm:h-12 sm:w-12">
                                    <Image
                                        src={step.icon}
                                        alt="step icon"
                                        fill
                                        className="object-contain brightness-200"
                                    />
                                </div>
                            </div>

                            {/* DESCRIPTION TEXT */}
                            <div className="mt-8 px-4 text-center flex flex-col items-center gap-1">
                                <h3 className="text-base font-semibold text-background whitespace-nowrap">{step.title}</h3>
                                <p className="mt-2 text-[12px] sm:text-[14px]  text-primary font-medium max-w-70 ">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CALL TO ACTION BUTTON */}
            <div className="mt-20 flex justify-center">
                <button className="relative group px-8 py-4 rounded-2xl bg-gradient-horizontal cursor-pointer  ">
                    <span className="flex flex-row items-center gap-2 text-background font-semibold text-[10px] sm:text-base">
                        Apply This Framework to Your Brand
                        <Image src="/assets/icons/Arrow.svg" alt="Arrow" width={20} height={20} className="brightness-10 invert" />
                    </span>
                </button>
            </div>
        </section>
    );
};

export default Revenue;