import React from 'react'
import Image from 'next/image'

const integrations = [
    { name: 'Shopify', label: 'E-Commerce', icon: '/assets/icons/shopify.svg' },
    { name: 'Klaviyo', label: 'Email Platform', icon: '/assets/icons/Klaviyo.svg' },
    { name: 'Mailchimp', label: 'Email Platform', icon: '/assets/icons/Mailchimp.svg' },
    { name: 'HubSpot', label: 'CRM', icon: '/assets/icons/Hubspot.svg' },
    { name: 'ActiveCampaign', label: 'Automation', icon: '/assets/icons/Compaign.svg' },
    { name: 'Zapier', label: 'Integration', icon: '/assets/icons/Zapier.svg' },
]

const Integration = () => {
    return (
        <section id="integrations" className="mx-auto w-full  px-4 py-12 sm:py-14.5">
            <div className="rounded-3xl mx-auto sm:rounded-[39px] max-w-6xl border-[0.5px] border-[rgba(185,185,185,0.50)] bg-[linear-gradient(180deg,#111827_0%,#0F172A_100%)] p-6 sm:p-10 md:p-14.5 transition-all">

                <div className="mx-auto max-w-3xl text-center">
                    <div
                        style={{ "--bg-radius": "10.867px", "--bg-border": "1.087px" } as React.CSSProperties}
                        className="mb-5 inline-flex items-center rounded-[10.867px] border-[1.087px] border-gradient-main gap-[8.695px] px-[18.472px] py-[9.78px] font-medium text-sm sm:text-base text-gradient-main bg-[#793FEE]/5"
                    >
                        <Image src="/assets/icons/Integration.svg" alt="Integration icon" width={18} height={18} priority />
                        <span>Seamless Integration</span>
                    </div>
                    <h2 className="text-2xl font-semibold text-background sm:text-[24px] lg:text-[32px] leading-tight">
                        Works With Your <br className="sm:hidden" /> Existing Stack
                    </h2>
                    <p className="mt-4 text-sm text-primary sm:text-lg font-normal opacity-80">
                        Pre-built integrations with the tools you already use!
                    </p>
                </div>

                <div className="mt-10 sm:mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {integrations.map((item) => (
                        <div key={item.name} className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-transform hover:scale-[1.02] active:scale-95">
                            <div className="flex items-center gap-4">
                                <div className="shrink-0 grid h-12 w-12 sm:h-14 sm:w-14 2xl:h-17 2xl:w-17 place-items-center rounded-2xl bg-[linear-gradient(135deg,rgba(37,99,235,0.20)_0%,rgba(124,58,237,0.20)_100%)] backdrop-blur-md">
                                    <Image src={item.icon} alt={`${item.name} icon`} width={34} height={34} priority />
                                </div>
                                <div className='flex flex-col items-start'>
                                    <div className="text-base sm:text-lg font-semibold text-background">{item.name}</div>
                                    <div className='mt-1 rounded-[5px] border-[0.88px] border-white/10 bg-white/5 px-2 py-0.5 backdrop-blur-sm'>
                                        <div className="text-[10px] sm:text-xs font-normal text-[#99A1AF] uppercase tracking-wider">{item.label}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 sm:mt-16 border-t-[0.88px] border-t-white/5 pt-8">
                    <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
                        <div className='flex flex-col gap-1'>
                            <div className="text-3xl sm:text-4xl font-bold text-gradient-main">50+</div>
                            <div className="text-xs sm:text-sm font-medium text-primary/70 uppercase tracking-widest">Platform Integrations</div>
                        </div>
                        <div className='flex flex-col gap-1 border-y border-white/5 py-6 sm:border-y-0 sm:py-0'>
                            <div className="text-3xl sm:text-4xl font-bold text-gradient-main">99.9%</div>
                            <div className="text-xs sm:text-sm font-medium text-primary/70 uppercase tracking-widest">Uptime Guarantee</div>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <div className="text-3xl sm:text-4xl font-bold text-gradient-main">24/7</div>
                            <div className="text-xs sm:text-sm font-medium text-primary/70 uppercase tracking-widest">Sync & Monitoring</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Integration;