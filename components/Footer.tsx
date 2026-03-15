import Image from "next/image";
import Link from "next/link";
import React from "react";
const Footer = () => {
    return (
        <footer className="box-border w-full overflow-x-hidden">
            <div className="relative bg-[#06018F] pt-10 sm:pt-14 md:pt-[100px] pb-8 md:pb-[50px] px-4 sm:px-6 md:px-8 transition-all duration-300">
                <div className="mx-auto max-w-[1280px]">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 md:gap-8 py-6 md:py-10" data-aos="fade-up">
                        {/* Logo */}
                        <div className="flex justify-center sm:justify-start">
                            <div className="flex flex-col gap-5">
                                <Image
                                    src="/images/footer.png"
                                    className="w-[62%] min-w-[160px] max-w-[220px] sm:max-w-none md:w-[50%] lg:w-[60%] inline-block align-middle border-0 rounded-none shadow-none h-auto object-cover"
                                    width={350}
                                    height={350}
                                    alt=""
                                />
                            </div>
                        </div>
                        {/* Useful Links */}
                        <div className="text-center sm:text-left">
                            <h4 className="font-heading text-lg sm:text-xl md:text-[1.6rem] font-extrabold leading-tight text-white mb-4 sm:mb-3">
                                Useful Links
                            </h4>
                            <nav className="flex flex-col gap-2 sm:gap-1" aria-label="Footer navigation">
                                <Link href="/" className="text-sm sm:text-[1rem] font-normal leading-6 text-[#D8D8D8] hover:text-white transition-colors py-1 min-h-[44px] flex items-center justify-center sm:justify-start">
                                    Home
                                </Link>
                                <Link href="/about-the-author" className="text-sm sm:text-[1rem] font-normal leading-6 text-[#D8D8D8] hover:text-white transition-colors py-1 min-h-[44px] flex items-center justify-center sm:justify-start">
                                    About The Author
                                </Link>
                                <Link href="/table-of-contents" className="text-sm sm:text-[1rem] font-normal leading-6 text-[#D8D8D8] hover:text-white transition-colors py-1 min-h-[44px] flex items-center justify-center sm:justify-start">
                                    Table Of Contents
                                </Link>
                                <Link href="/about-the-book" className="text-sm sm:text-[1rem] font-normal leading-6 text-[#D8D8D8] hover:text-white transition-colors py-1 min-h-[44px] flex items-center justify-center sm:justify-start">
                                    About The Book
                                </Link>
                                <Link href="/contact-now" className="text-sm sm:text-[1rem] font-normal leading-6 text-[#D8D8D8] hover:text-white transition-colors py-1 min-h-[44px] flex items-center justify-center sm:justify-start">
                                    Contact Now
                                </Link>
                            </nav>
                        </div>
                        {/* Get In Touch */}
                        <div className="text-center sm:text-left">
                            <h4 className="font-heading text-lg sm:text-xl md:text-[1.6rem] font-extrabold leading-tight text-white mb-4 sm:mb-3">
                                Get In Touch
                            </h4>
                            <a
                                href="mailto:matt@developerturnover.com"
                                className="inline-flex items-center gap-1.5 text-sm sm:text-[1rem] font-normal leading-6 text-[#D8D8D8] hover:text-white transition-colors break-all min-h-[44px] py-1 justify-center sm:justify-start"
                            >
                                <svg
                                    aria-hidden="true"
                                    className="w-[14px] h-[14px] fill-[#4FEECE] shrink-0"
                                    viewBox="0 0 512 512"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
                                </svg>
                                <span>matt@developerturnover.com</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#B4D6E3]">
                <div className="flex justify-center items-center py-5 sm:py-6 md:py-8 px-4">
                    <p className="font-sans text-xs sm:text-sm md:text-base font-normal leading-normal text-black text-center">
                        Copyright © 2026 developerturnover | All rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
export default React.memo(Footer);
