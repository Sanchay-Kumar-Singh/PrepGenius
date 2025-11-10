import React, { useState } from 'react';
import logo from '../assets/image.png'
import { useClerk,UserButton,useUser } from '@clerk/clerk-react';
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const {user}=useUser();
  const {openSignIn}=useClerk();
  return (
    <>
      <nav className="h-[70px] fixed  w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-20 bg-white text-balck-700 shadow-[0px_4px_25px_0px_#0000000D] transition-all">

        <a href="/" className="text-indigo-600">
          {/* SVG as it is */}
          <img src={logo} alt="" />
        </a>

        <ul className="md:flex hidden items-center gap-10">
          <li><a className="hover:text-gray-500/80 transition" href="/">Home</a></li>
          <li><a className="hover:text-gray-500/80 transition" href="/programming">Programming</a></li>
          <li><a className="hover:text-gray-500/80 transition" href="/placement rounds">Placement Rounds</a></li>
          <li><a className="hover:text-gray-500/80 transition" href="/aI services">AI Services</a></li>
        </ul>

      {
        user ? <UserButton/>:  <button type="button" onClick={openSignIn} className="bg-[linear-gradient(120deg,rgba(59,130,246,0.9),oklch(70.7%_0.265_303.9))] 
text-white border border-gray-300 md:inline hidden text-sm hover:bg-blue-900 active:scale-95 transition-all w-40 h-11 rounded-full
">
          Get started
        </button>
      }

        {/* Mobile Menu Toggle Button */}
        <button
          aria-label="menu-btn"
          type="button"
          className="menu-btn inline-block md:hidden active:scale-90 transition"
          onClick={() => setOpen(!open)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#000" viewBox="0 0 30 30">
            <path d="M3 7h24M3 14h24M3 21h24" stroke="black" strokeWidth="2" />
          </svg>
        </button>

        {/* Mobile Menu */}
        {open && (
          <div className="mobile-menu absolute top-[70px] left-0 w-full bg-white p-6 md:hidden">
            <ul className="flex flex-col space-y-4 text-lg">
              <li><a href="#" className="text-sm">Home</a></li>
              <li><a href="#" className="text-sm">Services</a></li>
              <li><a href="#" className="text-sm">Portfolio</a></li>
              <li><a href="#" className="text-sm">Pricing</a></li>
            </ul>
        {
          user ? <UserButton/>:
            <button onClick={openSignIn} type="button" className="bg-[oklch(70.7%_0.265_303.9)] text-gray-600 border border-gray-300 mt-6 text-sm hover:bg-gray-50 active:scale-95 transition-all w-40 h-11 rounded-full">
              Get started
            </button>
        }
          </div>
        )}
      </nav>
      
    </>
  );
};

export default Navbar;
