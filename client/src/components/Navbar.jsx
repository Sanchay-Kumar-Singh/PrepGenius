import React, { useState } from 'react';
import logo from '../assets/image.png';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const { user } = useUser();
  const { openSignIn } = useClerk();
  const navigate = useNavigate();

  const navItems = [
    { href: "", name: "Home", dropdown: [] },
    {
      href: "programming", name: "Programming", dropdown: [
        { name: "C", href: "programming/c" },
        { name: "C++", href: "programming/cpp" },
        { name: "Java", href: "programming/java" },
        { name: "Python", href: "programming/python" },
        { name: "FullStack", href: "programming/fullstack" },
      ]
    },
    {
      href: "placement-round", name: "Placement Rounds", dropdown: [
        { name: "Aptitude Round", href: "placement-round/aptitude-round" },
        { name: "Technical Round", href: "placement-round/technical-round" },
        { name: "Coding Round", href: "placement-round/coding-round" },
        { name: "HR Round", href: "placement-round/hr-round" },
      ]
    },
    {
      href: "ai-services", name: "AI Services", dropdown: [
        { name: "AI Roadmap Generator", href: "ai-services/roadmap" },
        { name: "AI Quiz Generator", href: "ai-services/quiz" },
        { name: "AI Mock Interview", href: "ai-services/mock-interview" },
        { name: "AI Resume Reviewer", href: "ai-services/review-resume" },
      ]
    },
  ];

  return (
    <>
      <nav className="h-[70px]  w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-20 bg-white text-black shadow-[0px_4px_25px_0px_#0000000D] transition-all">
        <img onClick={() => navigate("/")} src={logo} alt="logo" className="text-indigo-600 cursor-pointer" />
       <ul className="md:flex hidden items-center gap-10 relative">
      {navItems.map((item) => (
        <li key={item.name} className="relative group">
          <span
            onClick={() => navigate(`/${item.href}`)}
            className="hover:text-gray-600 cursor-pointer"
          >
        {item.name}
      </span>

      {item.dropdown.length > 0 && (
        <ul
          className="absolute top-8 left-0 bg-white shadow-md rounded-md py-2 w-52 border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
        >
          {item.dropdown.map((subItem) => (
            <li
              key={subItem.name}
              onClick={() => navigate(`/${subItem.href}`)}
              className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              {subItem.name}
            </li>
          ))}
        </ul>
      )}
    </li>
  ))}
</ul>


        {user ? (
          <UserButton />
        ) : (
          <button
            type="button"
            onClick={openSignIn}
            className="bg-[linear-gradient(120deg,rgba(59,130,246,0.9),oklch(70.7%_0.265_303.9))] text-white border border-gray-300 md:inline hidden text-sm hover:bg-blue-900 active:scale-95 transition-all w-40 h-11 rounded-full"
          >
            Get started
          </button>
        )}

        {/* Mobile menu button */}
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
              {navItems.map((items) => (
                <li key={items.name} onClick={() => navigate(`${items.href}`)}>
                  {items.name}
                </li>
              ))}
            </ul>
            {user ? (
              <UserButton />
            ) : (
              <button
                onClick={openSignIn}
                type="button"
                className="bg-[oklch(70.7%_0.265_303.9)]  text-gray-600 border border-gray-300 mt-6 text-sm hover:bg-gray-50 active:scale-95 transition-all w-40 h-11 rounded-full cursor-pointer"
              >
                Get started
              </button>
            )}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
