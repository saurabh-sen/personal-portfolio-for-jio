import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

interface PMainWrapper {
  children: React.ReactNode
}

const MainWrapper: React.FC<PMainWrapper> = ({ children }) => {
  return (
    <div className='content-wrapper scroll-smooth'>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default MainWrapper