import React from 'react'
import Sidebar from './components/Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <main className="relative max-w-8xl w-full mx-auto p-4 md:p-8">
    <div className="absolute top-0 -translate-y-[99%] left-1/2 -translate-x-1/2 max-w-[942px] w-full h-[211px] bg-brand-main rounded-full blur-[136px]"></div>

    <div className="flex items-start gap-8 h-full">
      <Sidebar />
      <div className="relative w-full flex-1 max-h-[836px] h-full overflow-y-auto">
        <Outlet />
      </div>
    </div>
  </main>
  )
}

export default Layout