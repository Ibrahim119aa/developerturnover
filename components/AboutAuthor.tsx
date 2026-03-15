import { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { AMAZON_BOOK_URL } from "@/constants/site";

const AboutAuthor = () => {
    return (
        <section className="section-mint section-padding px-4 sm:px-6 md:px-12">
            <div className="container-section">
                <div className="content-split">
                    <div className="flex-1 flex flex-col justify-start space-y-4 sm:space-y-6 w-full min-w-0" data-aos="fade-right">
                        <h2 className="section-heading-sm">About This Guidebook</h2>
                        <h1 className="section-heading text-2xl sm:text-3xl md:text-[40px]">Navigating The Developer Turnover Process</h1>
                        <p className="body-text">
                            Florida is the nation's leading state when it comes to condominium and homeowners association law. This is likely because the state has historically had more incorporated neighborhoods than anywhere else, and therefore a lot more time to learn from experience. Those experiences get incorporated into legislature for homeowner protections, but also in some cases for developer protection, as may be equitable to both parties during development of a residential community.
                        </p>
                        <div className="btn-actions">
                            <Link href="/about-the-book" className="btn-primary-shadow">Learn More</Link>
                            <a target="_blank" href={AMAZON_BOOK_URL} rel="noopener noreferrer" className="btn-primary-shadow">Buy On Amazon</a>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center w-full min-w-0" data-aos="fade-left">
                        <Image src="/images/AboutTheBook.jpg" alt="Navigating the Developer Turnover Process" width={800} height={650} priority className="img-book-cover" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default memo(AboutAuthor);
