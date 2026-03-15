import { lazy, memo } from "react"
import Image from "next/image";
import Link from "next/link";
const Header = memo(lazy(() => import("@/components/Header")))
const HomePageHero = () => {
    return (
        <section
            className="relative overflow-hidden bg-cover bg-center transition-all duration-300 py-12 sm:py-16 md:py-20 lg:py-[120px] xl:py-[150px] px-4 sm:px-6"
            style={{
                backgroundImage:
                    "url('/images/homepagehero.webp')",
            }}
        >

            <div className="absolute inset-0 bg-[#B4D6E3] opacity-80 transition-all duration-300"></div>
            <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-[0] rotate-180">
                <svg
                    className="w-full h-auto"
                    fill="#0E113C"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,0L1440,120L1440,0L0,0Z"
                        className="fill-[#0E113C]"
                    ></path>
                </svg>
            </div>
            <main className="relative z-5 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
                {/* Left Content */}
                <div className="space-y-5 sm:space-y-6 md:space-y-8" data-aos="fade-right">
                    <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] lg:text-6xl font-extrabold text-white text-balance leading-[1.12] tracking-[-0.02em]">
                        Navigating The Developer Turnover Process
                    </h2>

                    <p className="text-[0.9375rem] sm:text-base md:text-lg text-white/95 text-pretty mx-0 sm:mx-2 leading-[1.7] max-w-md">
                        The transition from developer control to resident control is a challenging time for any community. Reality is that a majority of people buying into deed restricted community associations don't truly understand the extent to which they are binding themselves to the covenants, conditions, and restrictions inherent to their new home ownership.
                    </p>

                    <div className="flex flex-col min-[400px]:flex-row flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4 md:pt-6 mx-0 sm:mx-2">
                        <button className="bg-[#12123C] hover:bg-gray-800 text-white font-semibold cursor-pointer px-5 py-3 sm:px-6 sm:py-3.5 rounded transition-colors text-sm sm:text-[0.9375rem] min-h-[44px] tracking-wide">
                           <Link href={"/about-the-author"}>
                            Learn More
                           </Link>
                        </button>
                        <a target="_blank" href="https://www.amazon.com/dp/1098314301?ref=cm_sw_r_ffobk_cp_ud_dp_E1RDMABQB7THPCG6RD3X&ref_=cm_sw_r_ffobk_cp_ud_dp_E1RDMABQB7THPCG6RD3X&social_share=cm_sw_r_ffobk_cp_ud_dp_E1RDMABQB7THPCG6RD3X&bestFormat=true" className="bg-[#12123C] text-center hover:bg-gray-800 text-white font-semibold cursor-pointer px-5 py-3 sm:px-6 sm:py-3.5 rounded transition-colors text-sm sm:text-[0.9375rem] min-h-[44px] underline-none tracking-wide">
                            Buy On Amazon
                        </a>
                    </div>
                </div>

                {/* Right - Book Cover */}
                <div className="flex justify-center items-center relative" data-aos="fade-left">
                    <div className="relative w-full max-w-[350px] sm:max-w-sm md:max-w-lg aspect-square">
                        <Image src="/images/book.jpg" alt="Hero Image" width={700} height={700} className="rounded-[10px] object-cover h-auto transition-all duration-300 w-full" />
                    </div>
                </div>
            </main>




            {/* Content here */}
        </section>
    )
}
export default memo(HomePageHero);
