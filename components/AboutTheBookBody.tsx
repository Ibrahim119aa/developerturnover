import { memo } from "react";
import Image from "next/image";
import { AMAZON_BOOK_URL } from "@/constants/site";

const AboutTheBookBody = () => {
    return (
        <div className="section-mint overflow-x-hidden">
            <div className="flex flex-row flex-wrap md:flex-nowrap pt-4 sm:pt-6 md:pt-[10px] px-4 sm:px-6 pb-0 mx-auto max-w-[1280px] w-full">
                <div className="flex flex-row flex-wrap justify-normal items-normal content-normal w-full max-w-7xl mx-auto gap-0 pt-6 sm:pt-10 md:pt-[80px] pb-0 px-0">
                    <div className="flex flex-col justify-center gap-2 w-full md:w-1/2 pr-0 md:pr-10 min-w-0" data-aos="fade-right">
                        <h2 className="section-label-dark">About This Guidebook</h2>
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] leading-tight sm:leading-12 text-[var(--color-mint-text)] m-0 p-0 font-extrabold">Navigating The Developer Turnover Process</h2>
                        <div className="relative max-w-full min-w-0 text-[var(--color-mint-text)] transition-all duration-300 mb-0">
                            <p className="body-text mt-0 mb-[0.9rem]">
                                Florida is the nation’s leading state when it comes to condominium and homeowners association law. This is likely because the state has historically had more incorporated neighborhoods than anywhere else, and therefore a lot more time to learn from experience. Those experiences get incorporated into legislature for homeowner protections, but also in some cases for developer protection, as may be equitable to both parties during development of a residential community.
                            </p>
                            <p className="body-text mt-0 mb-[0.9rem]">Most states have continued to develop their association law based on trends seen in Florida’s legislative changes, and as such association law country-wide has many similarities. However, <em>every state has their own statute when it comes to condo or HOA governance</em>. Since Florida’s statute tends to be the most comprehensive, discussion of Florida associations and developer turnover within Florida are at the core of this guidebook.</p>
                            <p className="body-text mt-0 mb-[0.9rem]">
                                Readers outside of Florida will invariably still find the information provided extremely useful. Developer turnovers and the preparations required are the same beast, regardless of state statute, but understanding the requirements and obligations of the developer per each state’s statute will be critical.
                            </p>
                        </div>

                    </div>
                    <div className="flex flex-col justify-center w-full md:w-1/2 mt-6 md:mt-0 min-w-0" data-aos="fade-left">
                        <div className="relative max-w-full min-w-0 mb-0 text-center transition-all duration-300">
                            <Image className="inline-block align-middle h-auto max-h-[260px] sm:max-h-[360px] md:h-[500px] w-auto object-contain object-center border-0 shadow-none rounded-none max-w-full" src="/images/AboutTheBook.jpg" alt="Description" width={500} height={300} />
                        </div>
                    </div>
                </div>


            </div>
            <div className="flex flex-col flex-wrap w-full max-w-[1280px] mx-auto p-4 sm:p-6 md:px-8 md:pb-8" data-aos="fade-up">
                <div className="flex flex-col flex-wrap w-full h-full mx-auto gap-5">
                    <div className="w-full relative min-w-0">
                        <p className="body-text mt-0 mb-[0.9rem]">It must be stressed that the author of this guidebook is <strong>not</strong> an attorney, <strong>not</strong> an accountant, and <strong>not</strong> an engineer. As such, all information provided for in this guide is based on qualifications of <em>personal industry experience, understanding, and knowledge, and may therefore be subject to certain errors, omissions, or inaccuracy</em>.</p>
                        <p className="body-text mt-0 mb-[0.9rem]">Association governance, state statute, and a community’s governing documents are all very much driven by legal requirements and opinions, which should be provided by an attorney licensed in your state. Legal counsel should always be consulted before making any decisions, or taking any actions, such as those described or suggested in this guide.</p>
                        <p className="body-text mt-0 mb-[0.9rem]">Furthermore, though reference to state statute is intentionally left vague and ambiguous throughout the narrative, what references do exist, or may be perceived to exist, are based on current statute at the time of this writing. Regular legislative changes provide for constant updates and changes to statute, providing all the more reason why legal counsel should be consulted for any interpretation of your governing documents or state law.</p>
                        <p className="body-text mt-0 mb-[0.9rem]"><em>Nothing provided for in this guide, stated or implied, is intended to represent any interpretation of, or practice of, state law or association documents, and should therefore not be construed as such, or relied on as such.</em></p>
                        <p className="body-text mt-0 mb-[0.9rem]">This <strong>guidebook</strong> is intended to be no more than just that—A GUIDE. Please use the information and suggestions included only to <strong>guide</strong> your actions, your plans, and your decisions throughout your turnover process, or for any other educational purpose.</p>
                    </div>

                </div>
                <div className="my-3 flex justify-center md:justify-start">
                    <a href={AMAZON_BOOK_URL} target="_blank" rel="noopener noreferrer" className="btn-amazon">Buy On Amazon</a>
                </div>
            </div>
        </div>

    )
}
export default memo(AboutTheBookBody);
