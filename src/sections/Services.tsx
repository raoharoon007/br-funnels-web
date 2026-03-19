import React from 'react';
import Image from 'next/image';

const serviceItems = [
    {
        icon: '/assets/icons/Search.svg',
        title: 'Email Marketing Audit',
        description: 'Deep performance analysis, segmentation gaps, and revenue leak detection.',
        cta: 'Learn More',
    },
    {
        icon: '/assets/icons/Power.svg',
        title: 'Full Email Marketing Management',
        description: 'Strategy, automation, campaigns, copywriting, and ongoing optimization.',
        cta: 'Get Started',
    },
    {
        icon: '/assets/icons/Sms.svg',
        title: 'SMS Marketing',
        description: 'High-converting SMS flows and promotional campaigns with compliance built in.',
        cta: 'Explore',
    },
];

const Services = () => {
    return (
        <section className="relative mx-auto w-full  px-4 py-14 sm:py-20">
            <div className="relative max-w-6xl mx-auto w-full rounded-3xl ">
                <div className="text-center">
                    <h2 className="text-3xl font-semibold text-background sm:text-[32px]">Our Revenue Growth Services</h2>
                    <p className="mx-auto mt-3 max-w-6xl text-sm font-normal text-primary sm:text-lg">End-to-end funnel and retention marketing systems tailored to your brand.</p>
                </div>

                <div className="mt-8 2xl:mt-14.25 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
                    {serviceItems.map((item, idx) => (
                        <div key={idx} style={idx === 1 ? {"--bg-radius": "21.127px", "--bg-border": "0.88px"} as React.CSSProperties : undefined} className={`rounded-[21.127px] p-4 ${idx === 1 ? 'sm:p-7 md:p-7' : 'sm:p-7 mb-5'} ${idx === 1 ? 'border-[0.88px] border-gradient-main bg-white/5!' : 'border-[0.88px] border-white/10 bg-white/5'}`}>

                            <div className="flex flex-col items-start gap-3">
                                <div className="rounded-xl bg-[linear-gradient(180deg,#2563EB_0%,#7C3AED_100%)] shadow-[0_0_26.409px_0_rgba(124,58,237,0.30)] p-4">
                                    <Image src={item.icon} alt={item.title} width={28} height={28} priority />
                                </div>
                                <div>
                                    <h3 className="text-[21px] max-w-70 font-semibold text-background">{item.title}</h3>
                                </div>
                            </div>
                            <p className="mt-3 text-sm max-w-90 text-primary font-normal">{item.description}</p>
                            <button className="mt-4 cursor-pointer flex flex-row items-center gap-1.5 text-sm font-semibold text-gradient-main">
                                {item.cta}
                                <Image src="/assets/icons/purple-arrow.svg" alt="Arrow" width={20} height={20} priority  />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;