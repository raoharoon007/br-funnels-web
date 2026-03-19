import React from 'react';
import Image from 'next/image';

const stats = [
    { icon: '/assets/icons/Performance-icon1.svg', value: '2.4M+', label: 'Campaigns Delivered' },
    { icon: '/assets/icons/Performance-icon2.svg', value: '6.8%', label: 'Avg. Conversion Rate' },
    { icon: '/assets/icons/Performance-icon3.svg', value: '850K+', label: 'Subscribers Managed' },
    { icon: '/assets/icons/Performance-icon4.svg', value: '$12M+', label: 'Revenue Generated' },
]

const Performance = () => {
    return (
        <section id="performance" className="mx-auto w-full  px-4 py-14 sm:py-20">
            <div className="rounded-3xl mx-auto max-w-6xl bg-[linear-gradient(90deg,rgba(37,99,235,0.20)_0%,rgba(124,58,237,0.20)_50%,rgba(20,184,166,0.20)_100%)] p-6 sm:p-10 md:p-14.5 transition-all">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-[24px] font-semibold text-background sm:text-[32px]">Performance That Speaks for Itself!</h2>
                    <p className="mt-3 text-sm text-primary font-normal sm:text-[18px]">Real metrics from real campaigns we've managed</p>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((item) => (
                        <div key={item.label} className="rounded-2xl border border-white/20 bg-[linear-gradient(135deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_100%)] p-4 text-left">
                            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[linear-gradient(135deg,rgba(37,99,235,0.20)_0%,rgba(124,58,237,0.20)_100%)]">
                                <Image src={item.icon} alt={item.label} width={20} height={20} priority/>
                            </div>
                            <div className="mt-3 text-3xl font-bold text-gradient-main">{item.value}</div>
                            <div className="mt-1 text-sm font-medium text-primary">{item.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Performance;

