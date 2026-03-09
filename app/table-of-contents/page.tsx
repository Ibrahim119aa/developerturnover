import React, { lazy, memo } from "react";
const Hero = memo(lazy(() => import("@/components/Hero")));


const TableOfContent = () => {
    return (
        <div>
            <Hero title={"Table of Contents"} />
        </div>
    )
}
export default memo(TableOfContent);
