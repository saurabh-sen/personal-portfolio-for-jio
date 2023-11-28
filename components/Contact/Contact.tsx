"use client"

import React from 'react'

const Contact = () => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Form submitted')
  }

  return (
    <section id='contact' className='contact bg-primary px-6 py-12 md:p-24 flex justify-between'>
      <div className="contact__text hidden md:flex flex-col gap-4 text-xl w-[40%]">
        <h3 className="text-4xl font-semibold">Let&apos;s get in touch</h3>
        <p className="leading-loose">I enjoy discussing new projects and design challenges. Please share as much info, as possible so we can get the most out of our first catch-up.</p>
        <div className="address">
          <p className=" font-semibold">Living In:</p>
          <p>PNB colony, Madhya Pradesh, India.</p>
        </div>
        <div className="address">
          <p className=" font-semibold">Call:</p>
          <p>(+91) 8305781500</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="contact__form w-full md:w-1/2 gap-4">
        <h3 className=" text-xl md:text-4xl font-semibold">Estimate your project?</h3>
        <div className="form__group flex flex-col gap-8">
          <div className="flex items-center border-b border-gray-500 py-2">
            <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none placeholder:text-black" type="text" required placeholder="Jane Doe" aria-label="Full name" />
          </div>
          <div className="flex items-center border-b border-gray-500 py-2">
            <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none placeholder:text-black" type="email" required placeholder="jane.doe@email.com" aria-label="email input" />
          </div>
          <div className="flex items-center border-b border-gray-500 py-2">
            <textarea cols={30} rows={5} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none placeholder:text-black" required placeholder="Your message..." aria-label="your message input"></textarea>
          </div>
          <button className="my__contact__button text-sm md:text-lg">Send</button>
        </div>
      </form>
    </section>
  )
}

export default Contact