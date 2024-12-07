import React, { useState } from 'react'
import LoginImg from "../assets/login-img.png"
import LoginShape from "../assets/login-shape.png"
import Logo from "../assets/logo.png"
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [eror,setEror] = useState(false);
  const [credentials, setCredentials] = useState({ email: '' });
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (credentials.email) {
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/verification');
    } else {
      alert('Please enter valid credentials');
    }
  };

  return (
    <main className='relative grid md:grid-cols-2 w-screen h-screen overflow-hidden'>
      <img className='md:hidden absolute w-full h-full object-cover -z-10' src={LoginImg} alt="" />
      <div className='md:hidden absolute w-full h-full bg-brand-black/80 z-0'></div>
      <div className='max-w-md mx-auto px-4 md:px-6 w-full h-full flex items-center justify-center text-white'>
        
        <div className='w-full space-y-8 md:space-y-10 z-10'>
          <div>
            <h2 className="text-2xl md:text-[34px] font-bold leading-6">
              Sign In
            </h2>
            <p className="mt-3 md:text-lg">Easiest way to do reservations. </p>
          </div>
          <div className=''>
            <input 
              placeholder='Email' 
              type='email' 
              value={credentials.email}
              onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
              className={`w-full bg-brand-black text-brand-black-200 border px-5 h-12 md:h-[60px] rounded-full top-1.5 ${eror ? 'border-red-700' : 'border-brand-main'}`} 
            />
          </div>
          <button onClick={handleSubmit} className='w-full bg-brand-main text-center rounded-full text-white text-lg h-12 md:h-[60px]'>
            Continue
          </button>
        </div>
      </div>
      <div className='hidden md:block w-full relative'>
        <div className='absolute w-full h-full bg-brand-black/80 z-10'></div>
        <img className='absolute w-full h-full object-cover z-0' src={LoginImg} alt="" />
        <img className='absolute bottom-0 right-0 z-20' src={LoginShape} alt="" />
        <img className='absolute z-30 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2' src={Logo} alt='logo' />
      </div>
    </main>
  )
}

export default Login