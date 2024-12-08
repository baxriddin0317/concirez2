import React from 'react'
import { Outlet } from 'react-router-dom'
import profileBg from "./assets/add-profile-bg.png"
import Logo from "./assets/logo.png"

const AddProfileLayout = () => {
  return (
    <main className='relative w-screen h-screen '>
      <img className='absolute object-cover inset-0 w-full h-full -z-10' src={profileBg} />
      <div className='absolute w-full h-full inset-0 -z-10 bg-black/40 backdrop-blur-md'></div>

      {/* content */}
      <div className='flex flex-col items-center justify-center w-full h-full text-white z-20'>
        <img src={Logo} alt='logo' />
        <div className='max-w-md w-full mx-auto px-2.5 mt-6'>
          <div className='w-full bg-add-card backdrop-blur-[50px] text-center text-white border border-brand-main rounded-2xl p-4 md:p-6 lg:p-8 space-y-6 md:space-y-10'>
            <Outlet />
          </div>
        </div>
      </div>
    </main>
  )
}

export default AddProfileLayout