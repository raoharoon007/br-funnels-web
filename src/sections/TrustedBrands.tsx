import React from 'react';

const testimonials = [
    { 
        name: 'Cesar', 
        role: "Co founder of Susan Shapewear & Donna's Dresses",
        videoUrl: "https://www.youtube.com/embed/twd-acL2v1w?modestbranding=1&rel=0" 
    },
    { 
        name: 'Jure', 
        role: 'Co Founder of Zippra',
        videoUrl: "https://www.youtube.com/embed/XoKHw5_GSoM?modestbranding=1&rel=0"
    },
    { 
        name: 'Auria Abraham', 
        role: 'Co Founder Auria Malaysian Kitchen',
        videoUrl: "https://www.youtube.com/embed/4Pj_oHLjNUU?modestbranding=1&rel=0"
    },
];

const TrustedBrands = () => {
    return (
        <section className="relative overflow-hidden mx-auto w-full px-4 py-14 sm:py-20">
            
            <div className="absolute -left-[10%] -top-[10%] bg-gradient-main rounded-full w-87.5 h-87.5 opacity-20 blur-[100px] pointer-events-none z-0" />
            <div className="absolute -right-[10%] -top-[5%] bg-gradient-main rounded-full w-87.5 h-87.5 opacity-20 blur-[100px] pointer-events-none z-0" />

            <div className="relative z-10 mx-auto w-full max-w-6xl ">
                <div className="text-center">
                    <h2 className="text-3xl font-semibold text-background sm:text-[32px]">Trusted by Fast-Growing Brands</h2>
                    <p className="mx-auto mt-3 max-w-6xl text-sm font-normal text-primary sm:text-[18px]">Hear directly from the founders and marketers we’ve helped scale</p>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
                    {testimonials.map((person, idx) => (
                        <div key={idx} className="p-4 sm:p-5">
                            <div className="relative overflow-hidden rounded-2xl h-44 w-full group border border-white/10 shadow-2xl bg-black">
                                <iframe
                                    className="absolute inset-0 h-full w-full object-cover"
                                    src={person.videoUrl}
                                    title={`${person.name} Testimonial`}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="mt-3 2xl:mt-5 text-left">
                                <div className="text-[17px] font-semibold text-background">{person.name}</div>
                                <div className="mt-1 text-sm font-normal text-primary">{person.role}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    );
};

export default TrustedBrands;