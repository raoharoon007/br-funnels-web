import React from 'react';
import Image from 'next/image';

const Portfolio = () => {
    return (
        <section id="Portfolio" className="mx-auto w-full  px-4 py-12 sm:py-14.5">

            <div className="mx-auto max-w-6xl text-center flex flex-col items-center">
                {/* Badge */}
                <div className="mb-5 inline-flex items-center rounded-[10px] border-[1.087px] border-[#793FEE]/30 gap-2 px-4 py-1.5 font-medium text-sm sm:text-base text-gradient-main bg-[#793FEE]/5">
                    <Image src="/assets/icons/Mail.svg" alt="Mail icon" width={18} height={18} className="sm:w-5 sm:h-5" />
                    <span>Portfolio Showcase</span>
                </div>

                {/* Heading */}
                <h2 className="text-2xl font-semibold text-background sm:text-[24px] lg:text-[32px] leading-tight">
                    Designed for Conversions. <br className="sm:hidden" />
                    <span className='text-gradient-main'> Built for Scale.</span>
                </h2>

                {/* The Adjusted Paragraph */}
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
                    priority // Add this line
                />
            </div>

        </section>
    );
}

export default Portfolio;
