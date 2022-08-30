import React, { useState } from 'react';
import {
  MdOutlineRadioButtonUnchecked,
  MdRadioButtonChecked,
} from 'react-icons/md';

const Signin = () => {
  const [isChecked, setIsChecked] = useState(true);
  return (
    <div className="flex h-96 w-11/12 flex-col items-center justify-center rounded-lg bg-gray-200 py-3 shadow-lg sm:w-3/4 md:w-2/3 lg:w-1/2">
      <h2 className="pb-10 text-center font-sans text-lg font-semibold italic md:text-2xl lg:text-4xl">
        Connect Your Wallet
      </h2>
      <div
        className="mx-auto flex w-4/5 cursor-pointer flex-row items-center border-2 border-solid border-gray-300"
        onClick={() => setIsChecked(!isChecked)}
      >
        <div className="mr-2 flex h-20 w-20 items-center justify-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/2048px-MetaMask_Fox.svg.png"
            alt="metmask"
          />
        </div>
        <p className="text-base md:text-lg lg:text-xl xl:text-3xl">MetaMask</p>
        <div className="flex w-full justify-end pr-10">
          {isChecked ? (
            <MdRadioButtonChecked className="text-base  md:text-lg lg:text-2xl" />
          ) : (
            <MdOutlineRadioButtonUnchecked className="text-base  md:text-lg lg:text-2xl" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Signin;
