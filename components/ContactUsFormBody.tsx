import { lazy, memo } from "react"

const ContactForm = memo(lazy(() => import("@/components/ContactUsForm")));


const ContactUsFormBody = () => {
    return (
        <div className="w-full mx-auto">
            <div className="max-w-6xl mx-auto my-16">
                <ContactForm />
            </div>

        </div>
    )
}
export default memo(ContactUsFormBody);

