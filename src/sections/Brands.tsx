import React from 'react';
import Image from 'next/image';

const brandIcons = [
    '/assets/icons/tnnursery.svg',
    '/assets/icons/tree.svg',
    '/assets/icons/Eons.svg',
    '/assets/icons/Auria.svg',
    '/assets/icons/bareline.svg',
    '/assets/icons/Wallify.svg',
    '/assets/icons/Moig.svg',
    '/assets/icons/Radient.svg',
    '/assets/icons/Shinrai.svg',
];

const Brands = () => {
    return (
        <section className="mx-auto w-full px-4 py-14 sm:py-20">
            
            <div className="relative mx-auto w-full max-w-6xl rounded-[28px] border border-white/10 p-6 sm:p-10 md:p-14.5 2xl:px-25 2xl:py-15 overflow-hidden">
                
                <div 
                    className="absolute -right-[10%] -top-[15%] bg-gradient-main rounded-full w-75 h-75 opacity-25 blur-[80px] pointer-events-none z-0"
                />

                <div 
                    className="absolute -left-[10%] -bottom-[15%] bg-gradient-main rounded-full w-75 h-75 opacity-25 blur-[80px] pointer-events-none z-0"
                />

                <div className="relative z-10 text-center">
                    <h2 className="text-3xl font-semibold text-background sm:text-[32px]">Trusted by Leading Brands</h2>
                    <p className="mx-auto mt-3 max-w-2xl text-sm font-normal text-primary sm:text-base lg:text-lg">
                        Powering growth for companies across industries.
                    </p>
                </div>

                <div className="relative z-10 mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 md:gap-7">
                    {brandIcons.map((icon, idx) => (
                        <div
                            key={`${icon}-${idx}`}
                            style={{ "--bg-radius": "14.085px", "--bg-border": "0.88px" } as React.CSSProperties}
                            className="flex h-24 w-full items-center justify-center rounded-[14.085px] border-[0.88px] border-gradient-main bg-white/2 backdrop-blur-sm p-3 transition-all hover:bg-white/5"
                        >
                            <Image src={icon} alt={`Brand icon ${idx + 1}`} width={100} height={100} className=" object-contain" priority />
                        </div>
                    ))}
                </div>

                <div className="relative z-10 mt-8 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3">
                    <button className="inline-flex items-center gap-2 rounded-xl border border-primary bg-transparent px-5 py-2.5 text-sm font-semibold text-background cursor-pointer transition-all hover:bg-white/5">
                        See How We Scale Brands
                        <Image src="/assets/icons/Arrow.svg" alt="Arrow" width={18} height={18} className="brightness-0 invert" priority />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Brands;