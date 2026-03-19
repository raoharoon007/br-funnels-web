import React from 'react';
import Image from 'next/image';

const cardItems = [
    { title: 'Responsive Design by Default', text: 'Every email template is tested across 40+ devices and email clients.' },
    { title: 'Tap-Optimized CTA', text: 'Large buttons, clear spacing, and strategic placement for conversions.' },
    { title: 'Lightning-Fast Load Times', text: 'Optimized images and clean code ensure instant rendering on any connection.' },
];

const Optimization = () => {
    return (
        <section className="relative mx-auto w-full px-4 py-14 sm:py-20 overflow-hidden">

            <div 
                className="absolute -right-[5%] bg-gradient-main rounded-full top-0 w-150 h-200 opacity-30 blur-[120px] pointer-events-none z-0"

            />

            <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-9.25 items-center">
                <div className="max-w-xl mx-auto lg:mx-0 flex flex-col items-center lg:items-start text-center lg:text-left order-1">
                    <div className="mb-6 inline-block rounded-[28px] bg-gradient-purplish p-6 shadow-[0_0_30px_rgba(37,99,235,0.3)]">
                        <Image src="/assets/icons/purchasing.svg" alt="Mobile" width={50} height={50} priority />
                    </div>

                    <h2 className="mt-4 2xl:mt-9.5 flex flex-col gap-2 text-3xl font-semibold text-background sm:text-[32px]">
                        Optimized for <br />
                        <span className="text-gradient-main">
                            Mobile-First Buyers
                        </span>
                    </h2>

                    <p className="mt-6 text-lg text-primary font-normal max-w-125">
                        Over 70% of emails are opened on mobile. We design for thumb-friendly engagement and high conversions.
                    </p>

                    <div className="mt-10 space-y-6 w-full">
                        {cardItems.map((card, idx) => (
                            <div key={idx} className="flex flex-col sm:flex-row gap-4 items-center lg:items-start group">
                                <div className="mt-1 flex p-3 shrink-0 items-center justify-center rounded-xl bg-gradient-icons-bg">
                                    <Image src="/assets/icons/tick.svg" alt="Mobile" width={20} height={20} priority />
                                </div>
                                <div>
                                    <h4 className="text-lg font-medium text-background">{card.title}</h4>
                                    <p className="text-primary text-base font-normal max-w-90">{card.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative flex justify-center lg:justify-end gap-2 sm:gap-4 h-125 sm:h-175 order-2 mt-12 lg:mt-0">
                    <div className="relative z-10 w-1/4 min-w-17.5 sm:min-w-25 lg:min-w-30 2xl:min-w-35 rounded-[5px] border-2 border-background overflow-hidden translate-y-12">
                        <Image src="/assets/images/largepic1.webp" alt="Email Template 1" fill className="object-cover object-top" priority />
                    </div>
                    <div className="relative z-10 w-1/4 min-w-17.5 sm:min-w-25 lg:min-w-30 2xl:min-w-35 rounded-[5px] border-2 border-background overflow-hidden -translate-y-8 shadow-2xl">
                        <Image src="/assets/images/largepic2.webp" alt="Email Template 2" fill className="object-cover object-top" priority />
                    </div>
                    <div className="relative z-10 w-1/4 min-w-17.5 sm:min-w-25 lg:min-w-30 2xl:min-w-35 rounded-[5px] border-2 border-background overflow-hidden translate-y-4">
                        <Image src="/assets/images/largepic3.webp" alt="Email Template 3" fill className="object-cover object-top" priority />
                    </div>
                    <div className="relative z-10 w-1/4 min-w-17.5 sm:min-w-25 lg:min-w-30 2xl:min-w-35 rounded-[5px] border-2 border-background overflow-hidden -translate-y-12">
                        <Image src="/assets/images/largepic4.webp" alt="Email Template 4" fill className="object-cover object-top" priority />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Optimization;