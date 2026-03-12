import { memo } from "react"
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

type TocRow = { sr: number; title: React.ReactNode; page: number };

const tocRows: TocRow[] = [
    { sr: 1, title: <><strong>Introduction</strong> – Why Does Developer Turnover Cause So Much Angst?</>, page: 4 },
    { sr: 2, title: "Who is the Developer?", page: 5 },
    { sr: 3, title: "What is Turnover?", page: 7 },
    { sr: 4, title: "What if We Don't Want Turnover Yet?", page: 9 },
    { sr: 5, title: "Planning for Turnover – When will it Happen?", page: 9 },
    { sr: 6, title: "Creating the Turnover Committee", page: 11 },
    { sr: 7, title: "Property Management Involvement in Turnover", page: 13 },
    { sr: 8, title: <><strong>PRE-TURNOVER</strong>—Turnover Planning and Committee Considerations</>, page: 15 },
    { sr: 9, title: "Understanding the Association's Responsibilities (Declaration of Association)", page: 15 },
    { sr: 10, title: "Association Responsibilities – Community Infrastructure (HORIZONTAL DEVELOPMENT)", page: 19 },
    { sr: 11, title: "Berms, Swales, Culverts, and Canals", page: 20 },
    { sr: 12, title: "Lake Systems", page: 20 },
    { sr: 13, title: "Lake and Drainage System Structures", page: 21 },
    { sr: 14, title: "Lake Banks and Maintenance Easements", page: 21 },
    { sr: 15, title: "Littoral and Aquatic Plantings", page: 22 },
    { sr: 16, title: "Home & Building Drainage Elevations", page: 22 },
    { sr: 17, title: "Lake Fountains and Aerators", page: 23 },
    { sr: 18, title: "Water Features", page: 24 },
    { sr: 19, title: "Roadways & Parking Lots", page: 25 },
    { sr: 20, title: "Stormwater Systems, Catch Basins, and Outfalls", page: 26 },
    { sr: 21, title: "Sidewalks, Cart Paths, Bike Paths", page: 26 },
    { sr: 22, title: "Trail Systems, Boardwalks, Foot Bridges", page: 27 },
    { sr: 23, title: "Lift Stations", page: 27 },
    { sr: 24, title: "Fire Hydrant Systems", page: 28 },
    { sr: 25, title: "Streetlights", page: 28 },
    { sr: 26, title: "Landscape and Accent Lighting", page: 29 },
    { sr: 27, title: "Irrigation Systems, Timers/Clocks, and Pump Stations", page: 29 },
    { sr: 28, title: "Surface Water Recharge Wells", page: 31 },
    { sr: 29, title: "Potable Water & Gas Lines", page: 31 },
    { sr: 30, title: "Mailbox Clusters", page: 31 },
    { sr: 31, title: "Association Responsibilities – Common Area Assets (VERTICAL DEVELOPMENT)", page: 32 },
    { sr: 32, title: "Clubhouses & Other Structures", page: 32 },
    { sr: 33, title: "Food & Beverage Operations", page: 33 },
    { sr: 34, title: "Fitness Equipment & Facility", page: 34 },
    { sr: 35, title: "Pools & Spas", page: 34 },
    { sr: 36, title: "Pool Pumps & Equipment (the Pool Pit)", page: 36 },
    { sr: 37, title: "Decking & Pavers", page: 37 },
    { sr: 38, title: "Sports Courts & Structures", page: 37 },
    { sr: 39, title: "Docks & Launches", page: 38 },
    { sr: 40, title: "Entry Systems & Mechanicals", page: 38 },
    { sr: 41, title: "Entry Monuments, Gatehouses, & Structures", page: 39 },
    { sr: 42, title: "Walls & Fencing", page: 40 },
    { sr: 43, title: "Condominium Association Responsibilities – High-Rise & Mid-Rise Buildings", page: 40 },
    { sr: 44, title: "Developer Owned Community Assets", page: 41 },
    { sr: 45, title: "Community Development Plans & Documents", page: 42 },
    { sr: 46, title: "Deeds & Title Transfers – Homeowners Associations", page: 44 },
    { sr: 47, title: "Deeds & Title Transfers – Condominium Associations", page: 45 },
    { sr: 48, title: "Association Contracts", page: 47 },
    { sr: 49, title: "Association Insurance", page: 50 },
    { sr: 50, title: "Association Banking", page: 54 },
    { sr: 51, title: "Association Preserves & Conservation Areas", page: 55 },
    { sr: 52, title: "Document Amendments", page: 58 },
    { sr: 53, title: "Committee Needs", page: 60 },
    { sr: 54, title: "Community Rules, Regulations & Guidelines", page: 61 },
    { sr: 55, title: "Landscaping & Irrigation", page: 63 },
    { sr: 56, title: "The Turnover Punch List", page: 66 },
    { sr: 57, title: "Requests for Board Action Prior to Turnover", page: 68 },
    { sr: 58, title: "Financial Independence", page: 70 },
    { sr: 59, title: "Why a \"Buildout Budget?\"", page: 70 },
    { sr: 60, title: "What is Deficit Funding?", page: 72 },
    { sr: 61, title: "Developer Guarantees (Condominiums)", page: 74 },
    { sr: 62, title: "Capital Contributions", page: 75 },
    { sr: 63, title: "Reserve Funding – Homeowners Associations", page: 76 },
    { sr: 64, title: "Reserve Funding – Condominium Associations", page: 77 },
    { sr: 65, title: "Reserves – General Notes (HOA & Condo)", page: 78 },
    { sr: 66, title: "Reserve Funding Methodologies", page: 79 },
    { sr: 67, title: "Budgeting for Turnover", page: 80 },
    { sr: 68, title: <><strong>POST-TURNOVER – Resident Board Considerations & Responsibilities</strong></>, page: 81 },
    { sr: 69, title: "The Turnover Meeting", page: 81 },
    { sr: 70, title: "Turnover Document Requirements", page: 83 },
    { sr: 71, title: "The New Board – Immediate Considerations", page: 84 },
    { sr: 72, title: "Mindset – Pre-Turnover versus Post-Turnover", page: 88 },
    { sr: 73, title: "Developer Permit Obligations Post-Turnover", page: 88 },
    { sr: 74, title: "The Turnover Audit", page: 90 },
    { sr: 75, title: "Due To/From Calculation", page: 91 },
    { sr: 76, title: "Statutory Engineers Inspection Report (Condominium)", page: 92 },
    { sr: 77, title: "Board Considerations Post-Turnover", page: 93 },
    { sr: 78, title: "Auditing the Turnover Audit", page: 96 },
    { sr: 79, title: "Engineering Inspections & Defect Reports", page: 97 },
    { sr: 80, title: "Construction Defects", page: 98 },
    { sr: 81, title: "Settlement", page: 99 },
    { sr: 82, title: <><strong>APPENDIX</strong></>, page: 102 },
    { sr: 83, title: "Sample Governance Committee Charter", page: 102 },
    { sr: 84, title: "Sample Landscape Committee Charter", page: 103 },
    { sr: 85, title: "Sample Finance Committee Charter", page: 104 },
    { sr: 86, title: "Sample Resolution for Creation of Various Committees", page: 106 },
    { sr: 87, title: "Sample Resolution – Eligibility & Suspension Policy", page: 107 },
    { sr: 88, title: "Sample Protocol – Violations & Fining", page: 108 },
    { sr: 89, title: "Infrastructure Considerations Checklist", page: 110 },
    { sr: 90, title: "Association Asset Considerations Checklist", page: 113 },
    { sr: 91, title: "Turnover Committee Diligence Checklist", page: 116 },
    { sr: 92, title: "Post-Turnover Board Business Checklist", page: 119 },
    { sr: 93, title: "Sample High-Rise Equipment & Systems Checklist", page: 120 },
    { sr: 94, title: "Homeowners Association Document Turnover Requirements", page: 121 },
    { sr: 95, title: "Condo Association Document Turnover Requirements", page: 122 },
    { sr: 96, title: "Sample Turnover Document \"Receipt\"", page: 124 },
    { sr: 97, title: "Sample Cash Flow Projection Worksheet", page: 126 },
];

const TableOfContentBody = () => {
    return (
        <div className="bg-[#B4D6E3] pt-6 sm:pt-8 md:pt-[50px] pr-4 sm:pr-6 md:pr-[50px] pb-6 sm:pb-8 md:pb-[50px] pl-4 sm:pl-6 md:pl-[75px] transition-[background,border,border-radius,box-shadow] duration-300 relative">
            <div className="absolute inset-0 opacity-70 transition-[background,border-radius,opacity] duration-300" />
            <div className="max-w-[1586px] flex mx-auto relative box-border">
                <div className="flex relative min-h-[1px] w-full transition-all duration-300 box-border overflow-x-auto">
                    <div className="m-0 p-2 sm:p-[10px] flex flex-wrap content-start w-full min-w-0 relative box-border">
                        <div className={`${montserrat.className} w-full relative text-sm sm:text-base md:text-[19px] text-black transition-all duration-300 min-w-[280px]`}>
                            <table className="w-full border-collapse text-[0.9em] borde-4 border-[#80808012]">
                                <thead className="bg-transparent">
                                    <tr>
                                        <th className="text-center border-2 border-[#80808012] p-2 sm:p-4 whitespace-nowrap">Sr. No.</th>
                                        <th className="text-center border-2 border-[#80808012] p-2 sm:p-4">Section Title</th>
                                        <th className="text-center border-2 border-[#80808012] p-2 sm:p-4 whitespace-nowrap">Page No.</th>
                                    </tr>
                                </thead>
                                <tbody className="align-middle">
                                    {tocRows.map((row, index) => (
                                        <tr
                                            key={row.sr}
                                            className={index % 2 === 0 ? "hover:bg-[#80808012] cursor-pointer odd:bg-transparent even:bg-[#76636300]" : "hover:bg-[#80808012] cursor-pointer odd:bg-transparent even:bg-[#80808012]"}
                                        >
                                            <td className="border border-[#80808012] p-2 sm:p-4 text-center whitespace-nowrap">{row.sr}</td>
                                            <td className="border border-[#80808012] p-2 sm:p-4">{row.title}</td>
                                            <td className="border border-[#80808012] p-2 sm:p-4 text-center whitespace-nowrap">{row.page}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default memo(TableOfContentBody);
