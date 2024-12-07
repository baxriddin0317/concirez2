import React, { useState } from "react";
import resy from "../assets/resy.png";
import { useNavigate } from "react-router-dom";

const AddProfileStatus = () => {
  const [isStatus, setIsStatus] = useState(false);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/profiles");
  };
  return (
    <>
      <div className="flex items-center justify-center">
        <img src={resy} alt="resy" />
      </div>
      {isStatus ? (
        <>
          {/*  */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold leading-6">
              Success!
            </h2>
            <p className="mt-3">We have added Resy NY 1 to your account.</p>
          </div>
          {/*  */}
          <button
            onClick={handleBack}
            className="w-full bg-brand-main text-center rounded-full text-white text-lg h-[60px]"
          >
            Go to Dashboard
          </button>
        </>
      ) : (
        <>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold leading-6">
              We’re Sorry
            </h2>
            <p className="mt-3">
              We are unable to add your account at this time.
            </p>
          </div>
          <div className="space-y-2.5 md:space-y-5">
            {/*  */}
            <button className="w-full bg-brand-main text-center rounded-full text-white text-lg h-12 md:h-[60px]">
              Try Again
            </button>
            <button onClick={handleBack} className="relative w-full bg-transparent border border-brand-main text-center rounded-full text-white text-lg h-12 md:h-[60px]">
              Back to profiles
              <svg className="absolute left-5 top-1/2 -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" width={10} height={17} viewBox="0 0 10 17" fill="none">
                <path d="M8.5 1.5L1.5 8.5L8.5 15.5" stroke="#B0B0B0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default AddProfileStatus;
