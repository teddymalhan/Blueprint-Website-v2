import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as MenuHamburgerIcon } from "../assets/icons/hamburger.svg";
import { ReactComponent as MenuXIcon } from "../assets/icons/x.svg";
import {ReactComponent as GrayMenuHamburgerIcon} from "../assets/icons/TEMP_hamburger_gray.svg"
import {ReactComponent as GrayMenuXIcon} from "../assets/icons/x_gray.svg"
import Logo from "./shared/Logo";


const NavBar = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [isDark, setDark] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpened((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpened(false);
  };

  const toggleDark = () => {
    setDark((prev) => !prev);
  }

  const currentPath = useLocation().pathname;

  // Define nav links in one place
  const routes = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projectspage" },
    { name: "For Non Profits", path: "/nonprofits" },
    { name: "For Students", path: "/students" },
    { name: "About Us", path: "/about" },
  ];

  return (
    <nav className="flex justify-center bg-blueprint-offwhite">
      <div className="flex flex-col justify-between max-lg:flex-grow lg:flex-row lg:w-[80rem] lg:px-20">
        <div className="flex justify-between items-center py-4 px-4 sm:px-0 sm:mx-4">
          <div className="ml-2">
            <Logo isDark={isDark} />
          </div>

          <div className="mr-2">
            <MenuButton
              isDark={isDark}
              visibility="lg:hidden"
              isMenuOpened={isMenuOpened}
              toggleMenu={toggleMenu}
            />
          </div>
        </div>
        <NavLinks
          isMenuOpened={isMenuOpened}
          isDark={isDark}
          routes={routes}
          closeMenu={closeMenu}
          currentPath={currentPath}
        />
      </div>
      {/* Comment out button to test dark features */}
      {/* <button  
        onClick={toggleDark}
        className="ml-4 px-3 py-2 rounded transition-colors bg-[#0177E8] text-white hover:bg-[#0146BE] active:bg-[#002F80]"
        aria-label="Toggle dark mode"
      >
        {isDark ? "Light Mode" : "Dark Mode"}
      </button> */}
    </nav>
  );
};

function MenuButton({ isMenuOpened, visibility, toggleMenu, isDark }) {
  return (
    <button
      className={`${visibility} w-10 h-10 rounded-[7.05px] p-[13px_11px] gap-[9px] flex items-center justify-center transition-colors ${
        isDark ? 'bg-[#2A2A2A]' : 'bg-[#F3F3F3]'
      }`}
      onClick={toggleMenu}
      aria-label={isMenuOpened ? "Close menu" : "Open menu"}
    >
      
      {isMenuOpened ? (
        isDark ? <GrayMenuXIcon/>:<MenuXIcon />  
      ):(
         isDark ? <GrayMenuHamburgerIcon/>: <MenuHamburgerIcon /> 
      )}
    </button>
  );
}

function NavLinks({ routes, isMenuOpened, currentPath, closeMenu, isDark}) {
  return (
    // MENU BUTTON
    <div
      className={`flex flex-col items-center font-poppins lg:flex-row lg:space-x-12 lg:flex ${
        isMenuOpened ? "" : "max-lg:hidden"
      }`}
    >
      {/* MOBILE WRAPPER */}
      <div className={`
        max-lg:w-full max-lg:py-2 max-lg:px-4 max-lg:space-y-2
        ${isDark ? 'max-lg:bg-[#2A2A2A]' : 'max-lg:bg-white'}
        lg:contents 
      `}>
        {routes.map((route, index) => (
          <Link
            key={index}
            to={route.path}
            onClick={closeMenu}
            // max-lg - Mobile width
            // lg - desktop width
            className={`
              max-lg:w-full max-lg:h-[50px] max-lg:px-6 max-lg:py-3
              max-lg:flex max-lg:items-center max-lg:justify-start
              max-lg:rounded-md max-lg:text-left 
              max-lg:active:text-white
              ${isDark ? 'max-lg:active:bg-[#777777] max-lg:bg-[#2A2A2A] max-lg:text-white' : 
                'max-lg:active:bg-[#002F80] max-lg:bg-[#F3F3F3] max-lg:text-blueprint-black'}
              ${route.path === currentPath ? 'max-lg:font-semibold' : ''}
               
              lg:relative lg:h-[60px] lg:px-9 lg:py-3
              lg:flex lg:items-center lg:justify-between
              ${isDark ? `lg:text-white lg:hover:bg-[#777777] lg:active:bg-[#AAAAAA]`: `lg:hover:bg-[#0146BE] lg:active:bg-[#002F80]`}
              lg:bg-transparent 
              lg:hover:bg-[#0146BE] 
              lg:active:bg-[#002F80]
              lg:hover:text-white 
              lg:active:text-white
              lg:rounded lg:transition-all
              
              ${route.path === currentPath && "text-blueprint-blue underline font-semibold"}
              ${index === 0 && "lg:hidden"}
              
              font-poppins font-medium text-sm leading-[100%] uppercase
              whitespace-nowrap
              transition-all
            `}
          >
            {route.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
export default NavBar;
