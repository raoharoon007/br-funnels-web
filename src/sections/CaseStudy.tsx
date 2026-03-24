import React from 'react';
import Image from 'next/image';

const caseStudies = [
    {
        image: '/assets/images/casestudy1.webp',
        label: 'E-Commerce',
        title: 'Revenue in 90 Days',
        description: 'Increased email revenue through segmented automation & personalized flows.',
        footer: 'Fashion Retailer',
    },
    {
        image: '/assets/images/casestudy2.webp',
        label: 'E-Commerce',
        title: 'Trial Conversions',
        description: 'Optimized onboarding sequences and nurture campaigns for B2B E-Commerce.',
        footer: 'Analytics Platform',
    },
    {
        image: '/assets/images/casestudy3.webp',
        label: 'DTC',
        title: 'Customer LTV',
        description: 'Built retention system with SMS integration and post-purchase flows.',
        footer: 'Wellness Brand',
    },
];

const CaseStudy = () => {
    return (
        <section className="relative mx-auto w-full  px-4 py-14 sm:py-20">
            <div className="relative mx-auto w-full max-w-6xl ">
                <div className="text-center">
                    <h2 className="text-3xl font-semibold text-background sm:text-[32px]">Proven Funnel Success Stories</h2>
                    <p className="mx-auto mt-3 max-w-6xl font-normal text-sm text-primary sm:text-lg">Real results from real brands we’ve scaled</p>
                    <div className="mt-4 2xl:mt-10.5 flex flex-wrap items-center justify-center gap-2.75">
                        <button className="rounded-[10px] cursor-pointer bg-gradient-main px-5 py-3 text-xs font-semibold text-background">All</button>
                        <button className="rounded-[10px] cursor-pointer border-[0.88px] border-white/5 bg-white/3 backdrop-blur-sm px-5 py-3 text-xs font-semibold text-[#99A1AF]">E-Commerce</button>
                        <button className="rounded-[10px] cursor-pointer border-[0.88px] border-white/5 bg-white/3 backdrop-blur-sm px-5 py-3 text-xs font-semibold text-[#99A1AF]">DTC</button>
                        <button className="rounded-[10px] cursor-pointer border-[0.88px] border-white/5 bg-white/3 backdrop-blur-sm px-5 py-3 text-xs font-semibold text-[#99A1AF]">Info Products</button>
                    </div>
                </div>

                <div className="mt-8 2xl:mt-10.5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {caseStudies.map((study, idx) => (
                        <div key={idx} className="rounded-[22px] border-[0.88px] border-white/10 bg-[linear-gradient(180deg,#111827_0%,#0F172A_100%)] ">
                            <div className="relative h-44 overflow-hidden rounded-t-[22px]">
                                <Image src={study.image} alt={study.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" priority />
                                <div className="absolute inset-0 bg-[linear-gradient(180deg,#111827_0%,rgba(0,0,0,0)_100%)]" aria-hidden="true" />
                                <div className="absolute right-3 top-3">
                                    <div style={{ "--bg-radius": "8.803px", "--bg-border": "1px" } as React.CSSProperties} className="relative border border-gradient-main flex flex-row gap-1.75 rounded-[8.803px] shadow-[0_8.803px_13.205px_-2.641px_rgba(0,0,0,0.1),0_3.521px_5.282px_-3.521px_rgba(0,0,0,0.1)] px-2 py-1 text-sm font-bold text-background bg-[#793FEE]/5">
                                        <Image src="/assets/icons/funnel-arrow.svg" alt="Arrow" width={20} height={20} priority /> +62%
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-3 p-4">
                                <div className="inline-flex rounded-[7.5px] border-[0.88px] border-white/5 bg-white/3 backdrop-blur-sm px-2.5 py-0.75 text-xs font-normal text-primary">{study.label}</div>
                                <h3 className="text-[20px] font-semibold text-background ">{study.title}</h3>
                                <p className="text-sm font-normal max-w-80 text-primary">{study.description}</p>
                                <div className="border-t-[0.88px] border-t-white/10 pt-3 text-sm flex items-center justify-between">
                                    <span className='text-primary font-medium text-[12px]'>{study.footer}</span>
                                    <span className="text-gradient-main text-[12px] font-semibold flex flex-row gap-2 cursor-pointer">View Case Study <Image src="/assets/icons/purple-arrow.svg" alt="Arrow" width={20} height={20} /></span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudy;
