import React from 'react';
import Image from 'next/image';

const testimonials = [
    { name: 'Sarah Johnson', role: 'VP of Marketing at TechFlow Inc.' },
    { name: 'Michael Chen', role: 'Founder & CEO at GrowthLabs' },
    { name: 'Emily Rodriguez', role: 'Head of Growth at Elevate Commerce' },
];

const TrustedBrands = () => {
    return (
        <section className="relative mx-auto w-full max-w-6xl px-4 py-14 sm:py-20">
            <div className="text-center">
                <h2 className="text-3xl font-semibold text-background sm:text-[32px]">Trusted by Fast-Growing Brands</h2>
                <p className="mx-auto mt-3 max-w-6xl text-sm font-normal text-primary sm:text-[18px]">Hear directly from the founders and marketers we’ve helped scale</p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
                {testimonials.map((person, idx) => (
                    <div key={idx} className=" p-4 sm:p-5">
                        <div className="cursor-pointer relative overflow-hidden rounded-2xl">
                            <div className="h-44 w-full bg-linear-to-b from-[#111827] via-[#111827]/80 to-transparent" />
                            <Image src="/assets/images/video.webp" alt="Video testimonial" width={560} height={272} className="absolute inset-0 h-full w-full object-cover " />
                        </div>
                        <div className="mt-3 2xl:mt-5 text-left">
                            <div className="text-[17px] font-semibold text-background">{person.name}</div>
                            <div className="mt-1 text-sm font-normal  text-primary">{person.role}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TrustedBrands;
