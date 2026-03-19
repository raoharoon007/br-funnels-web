import React from 'react';
import Image from 'next/image';

const Portfolio = () => {
    return (
        <section id="Portfolio" className="mx-auto w-full  px-4 py-12 sm:py-14.5">

            <div className="mx-auto max-w-6xl text-center flex flex-col items-center">
                <div style={{ "--bg-radius": "10.867px", "--bg-border": "1.087px" } as React.CSSProperties}
                 className="mb-5 inline-flex items-center rounded-[10.867px] border-[1.087px] border-gradient-main gap-2 px-[18.5px] py-[9.6px] font-medium text-sm sm:text-base text-gradient-main bg-[#793FEE]/5">
                    <Image src="/assets/icons/Mail.svg" alt="Mail icon" width={18} height={18} priority />
                    <span className='font-medium text-sm sm:text-base'>Portfolio Showcase</span>
                </div>
                <h2 className="text-2xl font-semibold text-background sm:text-[24px] lg:text-[32px] leading-tight">
                    Designed for Conversions. <br className="sm:hidden" />
                    <span className='text-gradient-main'> Built for Scale.</span>
                </h2>

                <p className="mt-6 mx-auto max-w-[90%] sm:max-w-141 text-sm font-normal text-center text-primary sm:text-[18px] leading-relaxed">
                    Every email template is crafted with psychology-driven design principles and tested across industries.
                </p>
                <Image
                    src="/assets/images/PortfolioImage.webp"
                    alt="Portfolio Gallery"
                    width={1182}
                    height={528}
                    className="mx-auto pt-19.25"
                    quality={100}
                    priority 
                />
            </div>

        </section>
    );
}

export default Portfolio;
