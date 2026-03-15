"use client"

import { memo } from "react"

const ContactForm = () => {
    return (
        <div className="form-card">
            <h2 className="form-title">Contact Now</h2>
            <form className="space-y-4 md:space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="form-input-row">
                    <input type="text" placeholder="First Name" className="form-input flex-1" />
                    <input type="text" placeholder="Last Name" className="form-input flex-1" />
                </div>
                <input type="email" placeholder="Email" className="form-input" />
                <textarea placeholder="Message" rows={4} className="form-input resize-none" />
                <button type="submit" className="btn-submit">Send</button>
            </form>
        </div>

    )
}
export default memo(ContactForm)
