import React, { useState } from 'react'
import resy from "../assets/resy.png"
import { CloseIcon } from '../icons'
import { useNavigate } from 'react-router-dom'

const AddProfile = () => {
  const [eror,setEror] = useState(false);
  const navigate = useNavigate();

  // handle submit
  const handleSubmit = () => {
    navigate("/add-profiles/verification-profile")
  }

  return (
    <>
      <div className='relative flex items-center justify-center'>
        <img src={resy} alt='resy' />
        <button className='absolute right-0'>
          <CloseIcon />
        </button>
      </div>
      {/*  */}
      <div>
        <h2 className='text-2xl md:text-3xl font-bold leading-6'>
        Add Resy Profile
        </h2>
        <p className='mt-2'>
        We will send a verification code to your phone.
        </p>
      </div>
      {/*  */}
      <div className='space-y-3 md:space-y-5'>
        <div className='text-left'>
          <label className='text-brand-gray' htmlFor="name">Profile Name</label>
          <input placeholder='Resy NY 1' type='text' className={`w-full bg-brand-black text-brand-black-200 border px-4 h-12 md:h-[60px] rounded-xl top-1.5 ${eror ? 'border-brand-main' : 'border-brand-black-200'}`} />
        </div>
        <div className='text-left'>
          <label className='text-brand-gray' htmlFor="number">Phone Number</label>
          <input placeholder='+1 (212) 222-2206' type='tel' className={`w-full bg-brand-black text-brand-black-200 border px-4 h-12 md:h-[60px] rounded-xl top-1.5 ${eror ? 'border-brand-main' : 'border-brand-black-200'}`} />
        </div>
        <div className='text-left'>
          <label className='text-brand-gray' htmlFor="email">Email Address</label>
          <input placeholder='johndoe@gmail.com' type='email' className={`w-full bg-brand-black text-brand-black-200 border px-4 h-12 md:h-[60px] rounded-xl top-1.5 ${eror ? 'border-brand-main' : 'border-brand-black-200'}`} />
        </div>
      </div>
      {/*  */}
      <button onClick={handleSubmit} className='w-full bg-brand-main text-center rounded-full text-white text-lg h-12 md:h-[60px]'>
      Continue
      </button>
    </>
  )
}

export default AddProfile