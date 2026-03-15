import { lazy, memo } from "react"

const ContactForm = memo(lazy(() => import("@/components/ContactUsForm")));


const ContactUsFormBody = () => {
    return (
        <div className="w-full mx-auto overflow-x-hidden container-section max-w-6xl">
            <div className="my-8 sm:my-12 md:my-16" data-aos="fade-up">
                <ContactForm />
            </div>
        </div>
    )
}
export default memo(ContactUsFormBody);

