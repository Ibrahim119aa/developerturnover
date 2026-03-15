import { memo } from "react"
import Image from "next/image";
import Link from "next/link";
const AboutAuthor = () => {
    return (
        <section className="bg-[#B4D6E3] py-10 sm:py-14 md:py-16 px-4 sm:px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row gap-8 sm:gap-12 items-start">
                    {/* Left Column - Text Content */}
                    <div className="flex-1 flex flex-col justify-start space-y-4 sm:space-y-6 w-full min-w-0" data-aos="fade-right">
                        <div>
                            <h2 className="text-lg sm:text-xl md:text-[25px] leading-tight m-0 p-0 text-[#062233] font-extrabold">
                                About This Guidebook
                            </h2>
                        </div>

                        <div>
                            <h1 className="text-2xl sm:text-3xl md:text-[40px] leading-tight m-0 p-0 text-[#062233] font-extrabold">
                                Navigating The Developer Turnover Process
                            </h1>
                        </div>

                        <p className="text-[#062233] font-normal leading-relaxed text-sm sm:text-base">
                            Florida is the nation's leading state when it comes to condominium and homeowners association law. This is likely because the state has historically had more incorporated neighborhoods than anywhere else, and therefore a lot more time to learn from experience. Those experiences get incorporated into legislature for homeowner protections, but also in some cases for developer protection, as may be equitable to both parties during development of a residential community.
                        </p>

                        <div className="flex flex-col min-[400px]:flex-row flex-wrap gap-4 sm:gap-6 pt-2 sm:pt-4">
                            <button className="bg-[#0E113C] cursor-pointer border border-[#0E113C] text-white font-medium text-sm sm:text-[15px] leading-[1.2] px-5 py-3 sm:px-7 sm:py-3.5 shadow-[-7px_9px_7px_rgba(0,0,0,0.21)] transition-all duration-300 hover:bg-[#1a1f55] min-h-[44px]">
                                <Link href={"/about-the-book"}>
                                    Learn More
                                </Link>
                            </button>
                            <a target="_blank" href="https://www.amazon.com/dp/1098314301?ref=cm_sw_r_ffobk_cp_ud_dp_E1RDMABQB7THPCG6RD3X&ref_=cm_sw_r_ffobk_cp_ud_dp_E1RDMABQB7THPCG6RD3X&social_share=cm_sw_r_ffobk_cp_ud_dp_E1RDMABQB7THPCG6RD3X&bestFormat=true" className="bg-[#0E113C] border border-[#0E113C] text-white font-medium text-sm sm:text-[15px] leading-[1.2] px-5 py-3 sm:px-7 sm:py-3.5 shadow-[-7px_9px_7px_rgba(0,0,0,0.21)] transition-all duration-300 cursor-pointer underline-none hover:bg-[#1a1f55] text-center min-h-[44px]">
                                Buy On Amazon
                            </a>
                        </div>
                    </div>

                    {/* Right Column - Book Cover Image */}
                    <div className="flex-1 flex justify-center w-full min-w-0" data-aos="fade-left">
                        <Image
                            src={"/images/AboutTheBook.jpg"}
                            alt="Navigating the Developer Turnover Process"
                            width={800}
                            height={650}
                            priority
                            className="h-[280px] sm:h-[380px] md:h-[500px] w-full    shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default memo(AboutAuthor);
