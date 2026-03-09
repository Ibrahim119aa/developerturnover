import Image from "next/image";
import Link from "next/link";
import React from "react";
const Footer = () => {
    return (
        <div>
            <div className="box-border">
                <div className="relative bg-[#06018F] pt-[100px] pb-[50px] px-0 transition-all duration-300">
                    <div className="">
                        <div className="flex relative mx-auto max-w-[1280px] px-4">
                            <div className="flex relative  w-full transition-all duration-300">
                                <div className="m-0 p-0 flex flex-wrap content-start relative w-full">
                                    <div className="relative py-10">
                                        <div className="max-w-7xl mx-auto px-4  grid grid-cols-3  gap-5 ">
                                            <div className="max-w-285 lg:max-w-7xl mx-auto flex relative ">
                                                <div className="flex flex-col gap-5 ">
                                                    <div className="m-0 pr-[50px]">
                                                        <Image src={"/images/footer.png"} className="w-[62%] md:w-[50%] lg:w-[60%] inline-block align-middle border-0 rounded-none shadow-none h-auto max-w-full object-cover" width={350} height={350} alt=""></Image>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="max-w-285 lg:max-w-7xl  flex relative ">
                                                <div className="m-0 px-[30px] md:px-[50px] ">
                                                    <div className="w-full text-start transition-all duration-300 mb-3">
                                                        <h4 className="font-heading text-[1.6rem] font-extrabold leading-10 text-white">
                                                            Useful Links
                                                        </h4>
                                                    </div>
                                                    <div className="w-full text-start transition-all duration-300">
                                                        <h2 className="text-[1rem] font-normal leading-6  text-[#D8D8D8]" >
                                                            <Link href={"/"}>
                                                                Home
                                                            </Link>
                                                        </h2>
                                                    </div>
                                                    <div className="w-full text-start transition-all duration-300 my-6">
                                                        <h2 className="text-[1rem] font-normal leading-6  text-[#D8D8D8]" >
                                                            <Link href={"/about-the-author"}>
                                                                About The Author
                                                            </Link>
                                                        </h2>
                                                    </div>
                                                    <div className="w-full text-start transition-all duration-300 my-6">
                                                        <h2 className="text-[1rem] font-normal leading-6  text-[#D8D8D8]" >
                                                            <Link href={"/table-of-contents"}>
                                                                Table Of Contents
                                                            </Link>
                                                        </h2>
                                                    </div>
                                                    <div className="w-full text-start transition-all duration-300 my-6">
                                                        <h2 className="text-[1rem] font-normal leading-6  text-[#D8D8D8]" >
                                                            <Link href={"/about-the-book"}>
                                                                About The Book
                                                            </Link>
                                                        </h2>
                                                    </div>
                                                    <div className="w-full text-start transition-all duration-300 my-6">
                                                        <h2 className="text-[1rem] font-normal leading-6  text-[#D8D8D8]" >
                                                            <Link href={"/contact-now"}>
                                                                Contact Now
                                                            </Link>
                                                        </h2>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="max-w-285 lg:max-w-7xl  mx-auto flex relative ">
                                                <div className="m-0 px-[30px] md:px-[50px] ">
                                                    <div className="w-full text-start transition-all duration-300 mb-3">
                                                        <h4 className="font-heading text-[1.6rem] font-extrabold leading-10 text-white">
                                                            Get In Touch
                                                        </h4>
                                                    </div>
                                                    <div className="w-full text-start transition-all duration-300">
                                                        <ul className="list-none m-0 p-0 box-border">
                                                            <li className="flex items-center m-0 p-0 relative text-[#D8D8D8] box-border">

                                                                <a href="mailto:matt@developerturnover.com" className="flex items-center text-inherit">

                                                                    <span className="flex relative text-center">
                                                                        <svg
                                                                            aria-hidden="true"
                                                                            className="w-[14px] h-[14px] fill-[#4FEECE] mr-[3.5px] transition-colors duration-300 box-border"
                                                                            viewBox="0 0 512 512"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
                                                                        </svg>
                                                                    </span>
                                                                    <span className="elementor-icon-list-text">matt@developerturnover.com</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#B4D6E3]">
                    <div className="flex justify-center items-center py-8">
                        <div className="font-sans text-base font-normal leading-normal text-black">
                            <span>Copyright © 2026 developerturnover | All rights Reserved.</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default React.memo(Footer);
