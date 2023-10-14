'use client'

import { bebasNeue } from '@/lib/fonts'
import emailjs from '@emailjs/browser'
import Image from 'next/image'
import { useRef } from 'react'

const ContactSection = () => {
  const form = useRef<HTMLFormElement>(null)

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()

    if (form.current) {
      emailjs.sendForm('service_9werhmj', 'template_hj0i2pd', form.current, 'yvj395qK--9AilevX')
    }
  }

  return (
    <div className="relative h-screen w-full">
      <Image
        className="z-0 object-cover object-bottom"
        alt="retro style spaceship flying through space"
        src="/ContactUs.webp"
        layout="fill"
      />
      <div className="z-5 relative flex h-full w-full flex-col items-center justify-between p-5">
        <h1
          className={`text-6xl text-text-200 ${bebasNeue.className}`}
          style={{ WebkitTextStroke: '1.5px black' }}
        >
          Contact Us
        </h1>
        <div className="w-3/5 rounded-xl border-2 border-black bg-gray-400 p-8 shadow-lg">
          <form ref={form} onSubmit={sendEmail}>
            <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
              <div className="flex-1">
                <label className="mb-2 block text-lg font-bold">Name</label>
                <input
                  type="text"
                  name="from_name"
                  className="w-full rounded-md border p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div className="flex-1">
                <label className="mb-2 block text-lg font-bold">Email</label>
                <input
                  required
                  type="email"
                  name="from_email"
                  className="w-full rounded-md border p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="mb-2 block text-lg font-bold">Message</label>
              <textarea
                name="message"
                className="h-32 w-full rounded-md border p-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              ></textarea>
            </div>
            <div className="mt-6 flex justify-center">
              <button
                type="submit"
                className="z-15 h-12 w-3/4 transform rounded-xl bg-gradient-to-r from-red-500 to-red-700 text-2xl font-bold text-white shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactSection
