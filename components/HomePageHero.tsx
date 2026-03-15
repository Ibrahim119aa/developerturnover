import { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { AMAZON_BOOK_URL } from "@/constants/site";

const HomePageHero = () => {
    return (
        <section
            className="relative overflow-hidden bg-cover bg-center transition-all duration-300 section-padding-lg px-4 sm:px-6"
            style={{ backgroundImage: "url('/images/homepagehero.webp')" }}
        >
            <div className="section-overlay bg-[var(--color-mint)]" />
            <div className="absolute -bottom-px left-0 w-full overflow-hidden leading-0 rotate-180">
                <svg className="w-full h-auto" fill="var(--color-primary)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" preserveAspectRatio="none">
                    <path d="M0,0L1440,120L1440,0L0,0Z" className="fill-[var(--color-primary)]" />
                </svg>
            </div>
            <main className="relative z-5 container-section grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
                <div className="space-y-5 sm:space-y-6 md:space-y-8 mx-0 sm:mx-2" data-aos="fade-right">
                    <h2 className="hero-heading">Navigating The Developer Turnover Process</h2>
                    <p className="hero-lead mx-0 sm:mx-2">
                        The transition from developer control to resident control is a challenging time for any community. Reality is that a majority of people buying into deed restricted community associations don't truly understand the extent to which they are binding themselves to the covenants, conditions, and restrictions inherent to their new home ownership.
                    </p>
                    <div className="btn-actions mx-0 sm:mx-2">
                        <Link href="/about-the-author" className="btn-primary">Learn More</Link>
                        <a target="_blank" href={AMAZON_BOOK_URL} rel="noopener noreferrer" className="btn-primary">Buy On Amazon</a>
                    </div>
                </div>
                <div className="flex justify-center items-center relative" data-aos="fade-left">
                    <div className="relative w-full max-w-[350px] sm:max-w-sm md:max-w-lg aspect-square">
                        <Image src="/images/book.jpg" alt="Hero Image" width={700} height={700} className="rounded-[10px] object-cover h-auto transition-all duration-300 w-full" />
                    </div>
                </div>
            </main>
        </section>
    )
}
export default memo(HomePageHero);
