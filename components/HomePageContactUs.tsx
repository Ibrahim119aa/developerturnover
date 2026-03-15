'use client';

import { Mail } from "lucide-react";
import { lazy, memo, useState } from "react";
import { CONTACT_EMAIL } from "@/constants/site";
const ContactUsForm = memo(lazy(() => import("@/components/ContactUsForm")));


export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    })
  }

  return (
    <section className="bg-blue-100 section-padding px-4 sm:px-6 md:px-8">
      <div className="container-section">
        <div className="content-grid-2 gap-8 md:gap-12">
          <div className="text-center md:text-left" data-aos="fade-up" data-aos-delay="100">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl leading-tight font-bold text-gray-900 mb-6 sm:mb-8">
              Contact Now For More Info
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <div className="bg-gray-900 rounded-full p-3 shrink-0">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-base sm:text-lg font-semibold text-gray-900 break-all text-center md:text-left">
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="200" className="max-w-7xl">
            <ContactUsForm />
          </div>
        </div>
      </div>
    </section>
  )
}
