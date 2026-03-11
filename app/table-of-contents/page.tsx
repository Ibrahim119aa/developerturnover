import React, { lazy, memo } from "react";
const Hero = memo(lazy(() => import("@/components/Hero")));
const TableOfContentBody = memo(lazy(() => import("@/components/TableOfContentBody")));


const TableOfContent = () => {
    return (
        <div>
            <Hero title={"Table of Contents"} />
            <TableOfContentBody />


        </div>
    )
}
export default memo(TableOfContent);
