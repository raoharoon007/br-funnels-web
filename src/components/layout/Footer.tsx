import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="mx-auto w-full max-w-360 px-6 py-10 lg:px-10 2xl:px-15">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-12 gap-x-8 pb-12">
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <p className="select-none leading-normal font-normal text-[24px] md:text-[26px] 2xl:text-[28px] text-gradient-main">
              BR FUNNELS
            </p>
            <p className="mt-4 text-sm font-normal leading-6 text-primary max-w-70">
              Performance-driven email & SMS growth systems.
            </p>
            
            <div className="mt-6 flex gap-3">
              {['Linkedin', 'Twitter', 'Instagram'].map((social) => (
                <Link 
                  key={social}
                  href="#" 
                  className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-white/5 bg-white/5 transition-all hover:bg-white/10 hover:border-white/10 active:scale-90"
                >
                  <Image src={`/assets/icons/${social}.svg`} alt={social} width={18} height={18} />
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-base font-medium text-background mb-5">Services</h3>
            <ul className="space-y-4 text-sm text-primary">
              <li className="">Email Marketing Audit</li>
              <li className="">Full Management</li>
              <li className="">SMS Marketing</li>
              <li className="">Funnel Strategy</li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-base font-medium text-background mb-5">Company</h3>
            <ul className="space-y-4 text-sm text-primary">
              <li className="hover:text-background cursor-pointer transition-colors">
                <Link href="#case-studies">Case Studies</Link>
              </li>
              <li className="hover:text-background cursor-pointer transition-colors">
                <Link href="#process">Process</Link>
              </li>
              <li className="hover:text-background cursor-pointer transition-colors">
                <Link href="/">About</Link>
              </li>
              <li className="hover:text-background cursor-pointer transition-colors">
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-base font-medium text-background">Get Weekly Growth Insights</h3>
            <p className="mt-3 text-sm text-primary leading-relaxed max-w-75 md:max-w-full">
              Expert tips on email marketing and funnel optimization.
            </p>
            
            <form className="mt-6 flex flex-col md:flex-row w-full max-w-[320px] md:max-w-full gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-[10px] border border-white/10 bg-white/5 px-4 py-3 text-sm text-primary placeholder:text-primary/50 focus:border-white/20 focus:bg-white/10 outline-none transition-all"
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 rounded-[10px] bg-gradient-horizontal py-3 px-5 text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-[0.98]"
              >
                <Image src="/assets/icons/Arrow.svg" alt="Arrow" width={24} height={24} className="brightness-0 invert" />
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 text-[13px] text-primary/80">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <span className="text-center md:text-left">
              © 2026 BR Funnels. All rights reserved.
            </span>
            <div className="flex justify-center gap-8">
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;