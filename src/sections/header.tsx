import React from 'react';

const Header = () => {
  return (
    <div className="flex h-20 w-full flex-col items-center justify-between bg-primary md:flex-row">
      <div className="mx-auto flex h-full w-max items-center justify-center  md:mx-12 lg:mx-20">
        <p className="text-2xl text-white md:text-3xl lg:text-4xl">
          Closed Sea
        </p>
      </div>
      <div className="flex h-full items-center justify-center md:pr-20">
        <div className="mx-4 flex h-full cursor-pointer items-center justify-center">
          <p className="text-base text-white hover:text-textPrimary md:text-lg">
            Marketplace
          </p>
        </div>
        <div className="mx-4 flex h-full cursor-pointer items-center justify-center">
          <p className="text-base text-white hover:text-textPrimary md:text-lg">
            Owned
          </p>
        </div>
        <div className="mx-4 flex h-full cursor-pointer items-center justify-center">
          <p className="text-base text-white hover:text-textPrimary md:text-lg">
            Profile
          </p>
        </div>
        <div className="mx-4 flex h-full cursor-pointer items-center justify-center">
          <p className="text-base text-white hover:text-textPrimary md:text-lg">
            Setting
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
