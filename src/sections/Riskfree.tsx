import React from 'react';
import Image from 'next/image';

const riskItems = [
    { icon: '/assets/icons/check.svg', title: '100% Transparent Reporting', text: 'Real-time access to all metrics and campaign performance' },
    { icon: '/assets/icons/Performance-icon3.svg', title: 'Dedicated Account Manager', text: 'Direct line to your strategic partner, not a ticket system' },
    { icon: '/assets/icons/Shield.svg', title: '30-Day Performance Commitment', text: 'See measurable improvements or we work until you do' },
    { icon: '/assets/icons/Delivery.svg', title: 'SLA-Based Delivery Framework', text: 'Guaranteed response times and milestone commitments' },
];

const Riskfree = () => {
    return (
        <section className="relative mx-auto w-full max-w-6xl px-4 py-14 sm:py-20">

            <div className="relative mx-auto w-full  p-4 sm:p-6 md:p-8">
                <div className="mx-auto flex w-full max-w-6xl flex-col items-center text-center">
                    <div className="rounded-[17px] bg-gradient-main p-4">
                        <Image src="/assets/icons/Shield.svg" alt="Guarantee" width={24} height={24} className="text-white" />
                    </div>
                    <h2 className="mt-5 text-3xl font-semibold text-background sm:text-[32px]">Results Backed by Performance Guarantee</h2>
                    <p className="mt-2 text-base text-primary sm:text-lg font-normal">Your growth is our commitment. We stand behind every campaign.</p>
                </div>

                <div className="mt-8 2xl:mt-15.5 grid grid-cols-1 gap-7 sm:grid-cols-2">
                    {riskItems.map((item, idx) => (
                        <div key={idx} className="rounded-[17px] border border-white/10 bg-white/5 p-4 sm:p-[29.07px]">
                            <div className="flex items-start gap-3">
                                <div className="mt-1 rounded-xl border-[0.88px] border-[#793FEE] bg-[linear-gradient(135deg,rgba(37,99,235,0.20)_0%,rgba(124,58,237,0.20)_100%)] backdrop-blur-md p-4">
                                    <Image src={item.icon} alt={item.title} width={24} height={24}  />
                                </div>
                                <div>
                                    <h3 className="text-[17px] font-semibold text-background">{item.title}</h3>
                                    <p className="mt-1 text-sm w-full max-w-80 font-normal text-primary">{item.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-6 2xl:mt-15.5 flex justify-center">
                    <button className="rounded-[14px] bg-[linear-gradient(90deg,#793FEE_0%,#26FDFE_106.88%)] py-4 px-12.25 text-base font-semibold text-background cursor-pointer">
                        Start Risk Free
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Riskfree;
