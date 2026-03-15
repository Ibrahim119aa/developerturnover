import Image from 'next/image'
// import { Button } from '@/components/ui/button'
import { memo } from 'react'
import Link from 'next/link'

// bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900
const HomePageAboutTheAuthor = () => {
    return (
        <main className="min-h-screen bg-[#0e113c] flex items-center justify-center px-4 sm:px-6 py-12 sm:py-16 md:py-20">
            <div className="max-w-7xl w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                    {/* Left Column - Image */}
                    <div className="flex justify-center order-2 md:order-1" data-aos="fade-up" data-aos-delay="100">
                        <div className="relative w-full max-w-[280px] sm:max-w-sm md:max-w-md">
                            <Image
                                src={"/images/author.jpg"}
                                alt="Matt Leukroth"
                                width={500}
                                height={400}
                                priority
                                className="rounded-lg shadow-2xl w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Column - Text Content */}
                    <div className="flex flex-col justify-center order-1 md:order-2 space-y-4 sm:space-y-6" data-aos="fade-up" data-aos-delay="200">
                        <div>
                            <h2 className="text-white font-bold text-xs sm:text-sm uppercase tracking-wider mb-2">
                                About The Author
                            </h2>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-3 sm:mb-4">
                                Matt Leukroth, MBA, LCAM
                            </h2>
                        </div>

                        <p className="text-gray-200 leading-relaxed text-sm sm:text-base md:text-lg">
                            Matt Leukroth, MBA, LCAM, has been in the property management and developer industries for more than twenty years. After beginning his career in food & beverage management, he began his experiences with developers and property management by spending several years with a public developer of lifestyle and golf club communities. As general manager of several developer owned assets, such as elaborate community town centers, private food & beverage operations, lifestyle amenities, and golf club & course operations, he gained extensive development and operational knowledge of private club facilities, in addition to participation on multiple association boards as a developer appointed director.
                        </p>

                        <div className="pt-2 sm:pt-4">
                            <button className="bg-[#2FCCD6] border border-[#2FCCD6] text-white font-medium text-sm sm:text-[15px] leading-[1.2] px-5 py-3 sm:px-7 sm:py-3.5 shadow-[-7px_9px_7px_rgba(0,0,0,0.21)] transition-all duration-300 hover:bg-[#2FCCD6] cursor-pointer min-h-[44px]">
                                <Link href={"/about-the-author"}>
                                    Learn More
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default memo(HomePageAboutTheAuthor)