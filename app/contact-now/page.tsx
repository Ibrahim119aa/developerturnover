import React, { memo, lazy } from "react";

const Hero = memo(lazy(() => import("@/components/Hero")));
const ContactUsFormBody = memo(lazy(() => import("@/components/ContactUsFormBody")));


const ContactUs = () => {
    return (
        <div>
            <Hero title={"Contact Now"}/>
            <ContactUsFormBody/>
        </div>
    )
}
export default memo(ContactUs)