import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='footer px-12 py-6 md:px-24 md:py-12 flex flex-col md:flex-row justify-between items-center text-sm md:text-lg text-center'>
      <p className="footer__copyright">
        Copyright &copy; {new Date().getFullYear()} <NameLink />. All rights reserved.
      </p>
      <p className="footer__name">Designed by <NameLink /></p>
    </footer>
  )
}

export const NameLink = () => {
  return (
    <Link href="https://saurabhsen.me" className='text-primary underline'>SAURABH SEN</Link>
  )
}

export default Footer