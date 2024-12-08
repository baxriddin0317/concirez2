import React, { useRef, useState } from 'react'
import profileBg from "../assets/add-profile-bg.png"
import Logo from "../assets/logo.png"
import { useNavigate } from 'react-router-dom';
import { CloseIcon } from '../icons';

const VerificationLogin = () => {
  const [eror,setEror] = useState(false);
  const [loading,setLoading] = useState(false);
  const [code, setCode] = useState<string[]>(Array(10).fill(""));
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const navigate = useNavigate();

  const handleChange = (value: string, index: number) => {
    if (!/^\d*$/.test(value)) return; // Allow only digits
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < code.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      navigate("/")
      setLoading(false)
    }, 2000);
  };
  return (
    <main className='relative w-screen h-screen '>
      <img className='absolute object-cover inset-0 w-full h-full -z-10' src={profileBg} />
      <div className='absolute w-full h-full inset-0 -z-10 bg-black/40 backdrop-blur-md'></div>

      {/* content */}
      <div className='flex flex-col items-center justify-center w-full h-full text-white z-20'>
        <img src={Logo} alt='logo' />
        <div className='max-w-3xl w-full mx-auto px-2.5 lg:px-5 mt-6'>
          <div className='relative flex flex-col w-full bg-add-card backdrop-blur-[50px] text-center text-white border border-brand-main rounded-2xl pt-10 p-8 gap-y-6 md:gap-y-10'>
            <button className='absolute right-6 top-6'>
              <CloseIcon />
            </button>
            {/*  */}
            <div>
              <h2 className='text-2xl md:text-3xl font-bold leading-6'>
              Activate Account
              </h2>
              <p className='mt-2'>
              We sent a verification code to your phone <br /> number. Please enter the code below.
              </p>
            </div>
            {/*  */}
            <div className="flex justify-center gap-2">
              {code.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  value={digit}
                  maxLength={1}
                  className={`w-12 h-12 text-center text-2xl font-black bg-brand-black text-brand-black-200 border rounded-xl top-1.5 focus:ring-brand-main focus:border-brand-main outline-none ${eror ? 'border-red-700' : 'border-brand-main'}`}
                  onChange={(e) => handleChange(e.target.value, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  ref={(el) => (inputRefs.current[index] = el!)}
                />
              ))}
            </div>
            {/*  */}
            <button onClick={handleSubmit} className='max-w-sm w-full mx-auto bg-brand-main text-center rounded-full text-white text-lg h-12 md:h-[60px]'>
              {!loading ? 'Continue' : <div className='flex items-center justify-center gap-3'>
                <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                <span>Verify..</span>
              </div>}
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default VerificationLogin