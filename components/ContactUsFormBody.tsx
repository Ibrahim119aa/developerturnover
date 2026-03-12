import { lazy, memo } from "react"

const ContactForm = memo(lazy(() => import("@/components/ContactUsForm")));


const ContactUsFormBody = () => {
    return (
        <div className="w-full mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto my-8 sm:my-12 md:my-16 ">
                <ContactForm />
            </div>
        </div>
    )
}
export default memo(ContactUsFormBody);

