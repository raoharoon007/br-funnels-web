import React from 'react';
import Image from 'next/image';

const riskItems = [
    { icon: '/assets/icons/check.svg', title: '100% Transparent Reporting', text: 'Real-time access to all metrics and campaign performance' },
    { icon: '/assets/icons/Performance-icon3.svg', title: 'Dedicated Account Manager', text: 'Direct line to your strategic partner, not a ticket system' },
    { icon: '/assets/icons/Shield.svg', title: 'Results Guaranteed — Or We Work For Free', text: 'We back every engagement with a performance guarantee. If you don’t see measurable revenue growth within 30 days, we keep working at no additional cost until you do. No excuses. No hidden clauses.' },
    { icon: '/assets/icons/Delivery.svg', title: 'SLA-Based Delivery Framework', text: 'Guaranteed response times and milestone commitments' },
];

const Riskfree = () => {
    return (
        <section className="relative overflow-hidden mx-auto w-full  px-4 py-14 sm:py-20">
            
            <div 
                className="absolute -right-[15%] -top-[10%] w-100 h-100 bg-gradient-main rounded-full opacity-30 blur-[120px] pointer-events-none z-0"
            />

            <div className="relative max-w-6xl z-10 mx-auto w-full ">
                <div className="mx-auto flex w-full max-w-6xl flex-col items-center text-center">
                    <div className="rounded-[17px] bg-gradient-main p-4 shadow-[0_0_20px_rgba(121,63,238,0.4)]">
                        <Image src="/assets/icons/Shield.svg" alt="Guarantee" width={35} height={35} priority />
                    </div>
                    <h2 className="mt-5 text-3xl font-bold text-background sm:text-[32px]">Results Backed by Performance Guarantee</h2>
                    <p className="mt-2 text-base text-primary sm:text-lg font-medium">Your growth is our commitment. We stand behind every campaign.</p>
                </div>

                <div className="mt-8 2xl:mt-15.5 grid grid-cols-1 gap-7 sm:grid-cols-2 auto-rows-fr">
                    {riskItems.map((item, idx) => (
                        <div key={idx} className="h-full min-h-full rounded-[17px] border border-white/10 bg-white/5 p-4 sm:p-[29.07px] backdrop-blur-sm flex">
                            <div className="flex items-start gap-3 flex-1">
                                <div className="mt-1 shrink-0 rounded-xl border-[0.88px] border-[#793FEE] bg-[linear-gradient(135deg,rgba(37,99,235,0.20)_0%,rgba(124,58,237,0.20)_100%)] p-4">
                                    <Image src={item.icon} alt={item.title} width={24} height={24} priority />
                                </div>
                                <div className="flex flex-col flex-1 justify-between">
                                    <h3 className="text-[17px] font-semibold text-background">{item.title}</h3>
                                    <p className="mt-1 text-sm w-full max-w-110 font-normal text-primary">{item.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-6 2xl:mt-15.5 flex justify-center">
                    <button className="rounded-[14px] bg-[linear-gradient(90deg,#793FEE_0%,#26FDFE_106.88%)] py-4 px-12.25 text-base font-semibold text-background cursor-pointer transition-transform hover:scale-105 active:scale-95">
                        Start Risk Free
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Riskfree;