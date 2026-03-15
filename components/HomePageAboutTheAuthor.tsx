import Image from "next/image";
import { memo } from "react";
import Link from "next/link";

const HomePageAboutTheAuthor = () => {
    return (
        <main className="min-h-screen section-navy flex items-center justify-center section-padding px-4 sm:px-6">
            <div className="container-section w-full">
                <div className="content-grid-2">
                    <div className="flex justify-center order-2 md:order-1" data-aos="fade-up" data-aos-delay="100">
                        <div className="relative w-full max-w-[280px] sm:max-w-sm md:max-w-md">
                            <Image src="/images/author.jpg" alt="Matt Leukroth" width={500} height={400} priority className="img-cover-rounded" />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center order-1 md:order-2 space-y-4 sm:space-y-6" data-aos="fade-up" data-aos-delay="200">
                        <h2 className="section-label">About The Author</h2>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-3 sm:mb-4">Matt Leukroth, MBA, LCAM</h2>
                        <p className="body-text-muted">
                            Matt Leukroth, MBA, LCAM, has been in the property management and developer industries for more than twenty years. After beginning his career in food & beverage management, he began his experiences with developers and property management by spending several years with a public developer of lifestyle and golf club communities. As general manager of several developer owned assets, such as elaborate community town centers, private food & beverage operations, lifestyle amenities, and golf club & course operations, he gained extensive development and operational knowledge of private club facilities, in addition to participation on multiple association boards as a developer appointed director.
                        </p>
                        <div className="pt-2 sm:pt-4">
                            <Link href="/about-the-author" className="btn-cta">Learn More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default memo(HomePageAboutTheAuthor)