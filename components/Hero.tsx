import React from "react";
interface HeroProps {
    title: string | null
}
const Hero = ({ title }: HeroProps) => {
    return (
        <section className="relative bg-[#F8F8F8] transition-all duration-300 mt-0 mb-0 section-padding-inner">
            <div className="section-overlay-dark bg-[var(--color-primary)]" />
            <div className="flex relative mx-auto max-w-[1140px]">
                <div className="flex relative min-h-[1px] w-full">
                    <div className="flex flex-wrap justify-center items-start w-full p-0 m-0">
                        <div className="text-center w-full" data-aos="zoom-in">
                            <h1 className="page-title">{title}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default React.memo(Hero);
