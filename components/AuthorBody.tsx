import React from "react";
import Image from "next/image";
const AuthorBody = () => {
    return (
        <div>
            <div className="relative bg-[#B4D6E3] transition-all duration-300 mt-0 mb-0 pt-[100px] pb-0">
                <div className="absolute inset-0  opacity-70 transition-all duration-300"></div>
                <div className="flex relative mx-auto max-w-[1140px] 2xl:max-w-[1280px]">
                    <div className="md:w-[42.543%] flex relative min-h-[1px]">
                        <div className="m-0 pr-[25px] pt-0 pb-0 pl-0">
                            <div className="transition-[background,border,border-radius,box-shadow,transform] duration-300">
                                <Image src={"/images/author.jpg"} alt="author" width={500} height={500} className="h-[700px] object-cover object-center">

                                </Image>
                            </div>
                        </div>
                    </div>
                    <div className="flex relative min-h-[1px] md:w-[57.457%] gap-5 transition-all duration-300">
                        <div className="pl-[75px] p-[10px] flex flex-wrap content-start relative w-full gap-5">
                            <div className="w-full relative transition-all duration-300 animate-fadeInRight">
                                <h2 className="text-[25px] font-extrabold capitalize  text-[#0E113C] leading-normal m-0 p-0 font-sans">
                                    About The Author
                                </h2>
                            </div>

                            <div className="w-full relative transition-all duration-300 animate-fadeInRight">
                                <h2 className="text-[3rem] font-extrabold capitalize text-[#0E113C] leading-none m-0 p-0 font-sans">
                                    Matt Leukroth, MBA, LCAM
                                </h2>
                            </div>
                            <div className="w-full relative transition-all duration-300 animate-fadeInRight">
                                <p className="mt-0 mb-[1.5rem] text-[#0E113C] [word-spacing:6px] text-[18px] font-sans">Matt Leukroth, MBA, LCAM, has been in the property management and developer industries for more than twenty years. After beginning his career in food &amp; beverage management, he began his experiences with developers and property management by spending several years with a public developer of lifestyle and golf club communities. As general manager of several developer owned assets, such as elaborate community town centers, private food &amp; beverage operations, lifestyle amenities, and golf club &amp; course operations, he gained extensive development and operational knowledge of private club facilities, in addition to participation on multiple association boards as a developer appointed director.</p>
                                <p className="mt-0  text-[#0E113C] [word-spacing:6px] text-[18px] font-sans">During the real estate market downturn, while developers were struggling and making massive layoffs, Matt migrated to the property management side of the real estate arena, working with a large successful state-wide management company. As a regional director of a business unit comprised of mostly developer accounts (many of which being those of the same developer for which he’d previously worked), he gained extensive experience and knowledge in the developer turnover process by working through multiple transitions from the property management and association side of that process.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="bg-[#B4D6E3]">
                <div className=" flex flex-col pt-5 pb-20 px-0 max-w-[1280px] mx-auto animate-fadeInUp">
                    <div className="flex flex-col flex-grow flex-shrink justify-start items-start flex-wrap  pt-5 pb-20 px-0 w-full max-w-[1280px] mx-auto gap-5">
                        <div className="flex flex-col  min-w-0 max-w-full">

                            <p className="mt-0 mb-[1rem] text-[#0E113C] [word-spacing:6px] text-[18px] font-sans">After several years in property management working primarily with developer-controlled associations, and with recovery of the local development and homebuilding industry, Matt then made a move back to the developer side as an executive with a private developer/homebuilder in southwest Florida. In this role Matt acted as division financial manager, project manager, and association manager for the company’s regional development projects. This role provided experience and extensive insight into the developer side of community association development, including document drafting and recording, entitlement and permitting, community planning, land development, and much more. In this role Matt also managed several developer turnovers, <em>but this time from the developer side of the process</em>, adding to the experienced gained previously from managing transitions from the property management and association side of the process, and providing invaluable perspective of how developers plan and manage their potential liabilities through a turnover.</p>
                            <p className="mt-0 mb-[1rem] text-[#0E113C] [word-spacing:6px] text-[18px] font-sans">Some years later, Matt again made a career move to join a large, nation-wide property management company as a regional vice president, overseeing a portfolio that did not include any developer accounts. Based on experiences to date, and because there were no developer relationships to maintain, Matt decided to exercise the knowledge gained from prior experiences by working to educate and provide guidance for communities under developer control and attempting to plan for turnover. Matt has done several public presentations on the developer turnover process, all of which have been highly attended and highly commended.</p>
                            <p className="mt-0 mb-[1rem] text-[#0E113C] [word-spacing:6px] text-[18px] font-sans">These combined experiences, and perspective, have provided Matt a unique and extensive knowledge base that includes comprehensive understanding of the development process, the mindset and considerations of both associations and developers during turnover, and the many potential pitfalls and potential concerns for associations when working through a developer turnover. All of this experience and knowledge (or at least most of it) he has now compiled into this guide to provide a substantial resource—a resource not often found in property managers or their management companies—for developed community residents anxious about turnover of their community association from a developer.&nbsp;</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default React.memo(AuthorBody);