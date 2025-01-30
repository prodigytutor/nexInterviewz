import React from 'react'
import Header from './_components/Header'
import Navigation from '@#/components/navigation'
function DashboardLayout({children}) {
  return (
    <div>
        <Navigation />
        <div className='mx-5 md:mx-20 lg:mx-36'>
        {children}
        </div>
       
    </div>
  )
}

export default DashboardLayout
