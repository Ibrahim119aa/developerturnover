"use client"

import { memo } from "react"

const ContactForm = () => {
    return (
        <div className="bg-[#12123C] rounded-xl p-8 md:p-10 ">
            <h2 className="text-white font-bold text-3xl md:text-4xl mb-6">Contact Now</h2>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="flex gap-4">
                    <input
                        type="text"
                        placeholder="First Name"
                        className="flex-1 bg-white rounded-lg py-3 px-4 placeholder:text-gray-500 text-gray-900 outline-none focus:ring-2 focus:ring-cyan-400/50"
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        className="flex-1 bg-white rounded-lg py-3 px-4 placeholder:text-gray-500 text-gray-900 outline-none focus:ring-2 focus:ring-cyan-400/50"
                    />
                </div>
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-white rounded-lg py-3 px-4 placeholder:text-gray-500 text-gray-900 outline-none focus:ring-2 focus:ring-cyan-400/50"
                />
                <textarea
                    placeholder="Message"
                    rows={4}
                    className="w-full bg-white rounded-lg py-3 px-4 placeholder:text-gray-500 text-gray-900 outline-none focus:ring-2 focus:ring-cyan-400/50 resize-none"
                />
                <button
                    type="submit"
                    className="w-full bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-3 rounded-lg transition-colors"
                >
                    Send
                </button>
            </form>
        </div>

    )
}
export default memo(ContactForm)
