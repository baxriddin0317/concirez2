import React from 'react'
import { Line, Logo, LogoutIcon } from '../icons'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside className='bg-main-gradient flex flex-col items-center justify-between sticky top-8 min-h-[836px] h-full border border-brand-black-100 rounded-2xl py-5 px-2'>
      <div className='w-[60px] flex flex-col gap-12'>
        <div className='mx-auto'>
          <Logo />
        </div>
        <Line />
        <div className='space-y-6'>
          <NavLink className={({ isActive, isPending }) => `flex flex-col items-center gap-1 text-xs font-bold text-white hover:text-brand-main ${isPending ? "text-white hover:text-brand-main" : isActive ? "text-brand-main" : ""}`} to={'/'}>
          {({ isActive }) => (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" width={20} height={22} viewBox="0 0 20 22" fill="none" className={isActive ? "fill-brand-main" : "fill-current"} >
                <path d="M19.4615 8.56456L11.1281 0.702061C11.124 0.698507 11.1202 0.694679 11.1167 0.690603C10.8099 0.411575 10.41 0.256958 9.99531 0.256958C9.58059 0.256958 9.18077 0.411575 8.87396 0.690603L8.8625 0.702061L0.538541 8.56456C0.368748 8.72069 0.233212 8.91037 0.140512 9.12159C0.0478117 9.33281 -3.50446e-05 9.56098 1.92581e-08 9.79165L1.92581e-08 19.4219C1.92581e-08 19.8639 0.175595 20.2878 0.488155 20.6004C0.800716 20.9129 1.22464 21.0885 1.66667 21.0885L18.3333 21.0885C18.7754 21.0885 19.1993 20.9129 19.5118 20.6004C19.8244 20.2878 20 19.8639 20 19.4219L20 9.79165C20 9.56098 19.9522 9.33281 19.8595 9.12159C19.7668 8.91037 19.6313 8.72069 19.4615 8.56456ZM18.3333 19.4219L1.66667 19.4219L1.66667 9.79165L1.67813 9.78123L10 1.92185L18.3229 9.77914L18.3344 9.78956L18.3333 19.4219Z" />
              </svg>
              Home
            </>
          )}
          </NavLink>
          <NavLink className={({ isActive }) => `flex flex-col items-center gap-1 text-xs font-bold text-white hover:text-brand-main ${isActive ? "text-brand-main" : ""}`} to={'/profiles'}>
            {({ isActive }) => (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} viewBox="0 0 20 21" fill="none" className={isActive ? "fill-brand-main" : "fill-current"} >
                  <path fillRule="evenodd" clipRule="evenodd" d="M10 0.088501C8.02219 0.088501 6.08879 0.674991 4.4443 1.7738C2.79981 2.87262 1.51809 4.4344 0.761209 6.26166C0.0043328 8.08893 -0.1937 10.0996 0.192152 12.0394C0.578004 13.9792 1.53041 15.761 2.92894 17.1596C4.32746 18.5581 6.10929 19.5105 8.0491 19.8963C9.98891 20.2822 11.9996 20.0842 13.8268 19.3273C15.6541 18.5704 17.2159 17.2887 18.3147 15.6442C19.4135 13.9997 20 12.0663 20 10.0885C19.9972 7.43719 18.9427 4.89528 17.068 3.02052C15.1932 1.14577 12.6513 0.0913008 10 0.088501ZM16.3231 15.7048C15.4652 14.4616 14.2588 13.4999 12.8558 12.9404C13.6094 12.3468 14.1594 11.5331 14.4292 10.6124C14.6989 9.69178 14.6751 8.70993 14.361 7.80345C14.0469 6.89696 13.4581 6.11089 12.6765 5.55455C11.8949 4.99821 10.9594 4.69925 10 4.69925C9.04063 4.69925 8.10511 4.99821 7.32352 5.55455C6.54194 6.11089 5.95315 6.89696 5.63903 7.80345C5.32491 8.70993 5.30108 9.69178 5.57084 10.6124C5.84061 11.5331 6.39057 12.3468 7.14423 12.9404C5.74117 13.4999 4.53484 14.4616 3.67693 15.7048C2.59286 14.4858 1.8843 12.9793 1.63659 11.3669C1.38887 9.75442 1.61255 8.10474 2.28069 6.61648C2.94884 5.12822 4.03296 3.86482 5.40251 2.97844C6.77206 2.09205 8.36864 1.62047 10 1.62047C11.6314 1.62047 13.2279 2.09205 14.5975 2.97844C15.967 3.86482 17.0512 5.12822 17.7193 6.61648C18.3875 8.10474 18.6111 9.75442 18.3634 11.3669C18.1157 12.9793 17.4071 14.4858 16.3231 15.7048Z" />
                </svg>
                Profiles
              </>
            )}
          </NavLink>
        </div>
        <Line />
      </div>
      <button className='flex flex-col items-center gap-1 text-xs font-bold text-white mt-auto'>
        <LogoutIcon />
        Logout
      </button>
    </aside>
  )
}

export default Sidebar