import React, { memo, lazy } from "react";

const Hero = memo(lazy(() => import("@/components/Hero")));


const ContactUs = () => {
    return (
        <div>
            <Hero title={"Contact Now"}/>
        </div>
    )
}
export default memo(ContactUs)