import { useState } from "react";
import searchIcon from "../../assets/searchIcon.png";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      {showNav ? (
        <div className="justify-center w-full mx-0 items-center flex flex-col bg-black text-white h-[70vh] py-12 relative">
          <ul className="flex flex-col justify-end items-center gap-7">
            <li className="cursor-pointer">Categories</li>
            <li className="cursor-pointer">Website Builders</li>
            <li className="cursor-pointer">Today's Deals</li>
          </ul>
          <div className="flex items-center relative mt-6">
            <img className="-me-4 absolute w-5 ms-3" src={searchIcon} alt="" />
            <input type="text" className="h-[37px] me-2 rounded-lg" />
          </div>
          <div className="flex md:hidden absolute right-0 pe-3 top-0 mt-[20px]">
            <button onClick={() => setShowNav(!showNav)}>
              <RxCross2 />
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-black h-[64px] mb-12 text-white flex items-center justify-end relative">
          <div className=" hidden md:flex max-w-[1024px] mx-auto">
            <div className="justify-end items-center flex">
              <div className="flex items-center relative me-3">
                <img
                  className="-me-4 absolute w-5 ms-3"
                  src={searchIcon}
                  alt=""
                />
                <input type="text" className="h-[37px] me-2 rounded-lg" />
              </div>
              <ul className="flex justify-end items-center gap-7">
                <li>Categories</li>
                <li>Website Builders</li>
                <li>Today's Deals</li>
              </ul>
            </div>
          </div>
          <div className="flex md:hidden absolute right-0 pe-3 ">
            <button onClick={() => setShowNav(!showNav)}>
              <FaBars />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
