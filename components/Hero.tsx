import React from "react";
interface HeroProps {
    title: string | null
}
const Hero = ({ title }: HeroProps) => {
    return (
        <section className="relative bg-[#F8F8F8] transition-all duration-300 mt-0 mb-0 py-[200px]">
            <div className="absolute inset-0 bg-[#0E113C] opacity-90 transition-all duration-300">

            </div>
            <div className="flex relative mx-auto max-w-[1140px]">
                <div className="flex relative min-h-[1px] w-full md:w-full">
                    <div className="flex flex-wrap justify-center items-start w-full p-0 m-0">
                        <div className="text-center">

                            <h1 className="text-white font-extrabold text-[5.5rem] leading-none m-0 p-0">
                                {title}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default React.memo(Hero);
