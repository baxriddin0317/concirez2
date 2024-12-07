import React, { useRef, useState } from 'react'
import resy from "../assets/resy.png"
import { useNavigate } from 'react-router-dom';

const VerificationProfile = () => {
  const [eror,setEror] = useState(false);
  const [loading,setLoading] = useState(false);
  const [code, setCode] = useState<string[]>(Array(6).fill(""));
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
      navigate("/add-profiles/last-step")
      setLoading(false)
    }, 2000);
  };
  return (
    <>
      <div className='relative flex items-center justify-center'>
        <button className='absolute left-0'>
          <svg xmlns="http://www.w3.org/2000/svg" width={10} height={17} viewBox="0 0 10 17" fill="none">
            <path d="M8.5 1.5L1.5 8.5L8.5 15.5" stroke="#FF462D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <img src={resy} alt='resy' />
      </div>
      {/*  */}
      <div>
        <h2 className='text-2xl md:text-3xl font-bold leading-6'>
        Phone Verification
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
              className={`w-12 h-12 text-center text-2xl font-black bg-brand-black text-brand-black-200 border rounded-xl top-1.5 focus:ring-orange-500 focus:border-orange-500 ${eror ? 'border-brand-main' : 'border-brand-black-200'}`}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(el) => (inputRefs.current[index] = el!)}
            />
          ))}
      </div>
      {/*  */}
      <button onClick={handleSubmit} className='w-full bg-brand-main text-center rounded-full text-white text-lg h-12 md:h-[60px]'>
        {!loading ? 'Continue' : <div className='flex items-center justify-center gap-3'>
          <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
          <span>Verify..</span>
        </div>}
      </button>
    </>
  )
}

export default VerificationProfile