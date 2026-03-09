import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
    return (
        <div>
            <div className="header-layout my-8">
                <div className="flex flex-col justify-center w-full md:w-1/4">
                    <div className="max-w-full min-w-0 mb-0 text-center transition-all duration-300">
                        <Image src={"/images/logo.png"} className="w-[52%] rounded-[10px] inline-block align-middle max-w-full h-auto" alt="Logo" width={100} height={100} />
                    </div>
                </div>
                <div className="flex flex-col justify-center w-full md:w-[55%]">
                    <div className="relative max-w-full min-w-0 mb-0 flex flex-col gap-5">
                        <div className="h-full transition-all duration-300 box-border ">
                            <nav className="box-border flex grow shrink order-none w-full ">
                                <div className="relative h-[100px] rounded-none bg-transparent z-[90000]">
                                    <ul className="flex flex-wrap h-full justify-start list-none p-0 m-0">
                                        <li className="relative list-none m-0 p-0 outline-none box-border">
                                            <Link href="/" className="flex items-center h-full px-5 text-[18px] font-semibold text-[#0E113C] font-montserrat transition-all duration-400 no-underline">
                                                Home
                                            </Link>
                                        </li>
                                        <li className="relative list-none m-0 p-0 outline-none box-border">
                                            <Link href="/about-the-author" className="flex items-center h-full px-5 text-[18px] font-semibold text-[#0E113C] font-montserrat transition-all duration-400 no-underline">
                                                About The Author
                                            </Link>
                                        </li>
                                        <li className="relative list-none m-0 p-0 outline-none box-border">
                                            <Link href="/table-of-contents" className="flex items-center h-full px-5 text-[18px] font-semibold text-[#0E113C] font-montserrat transition-all duration-400 no-underline">
                                                Table Of Contents
                                            </Link>
                                        </li>

                                        <li className="relative list-none m-0 p-0 outline-none box-border">
                                            <Link href="/about-the-book" className="flex items-center h-full px-5 text-[18px] font-semibold text-[#0E113C] font-montserrat transition-all duration-400 no-underline">
                                                About The Book
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center w-full md:w-[15%]">
                    <div className="relative min-w-0 max-w-full mb-0 transition-all duration-300 text-center">
                        <Link href="/contact-now" className="bg-[#2FCCD6] text-white  text-[1rem] font-medium line-clamp-1 px-8 py-4 shadow-[-7px_9px_7px_rgba(0,0,0,0.21)] rounded-none  hover:text-white focus:text-white transition-all duration-300">
                            Contact Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Header);