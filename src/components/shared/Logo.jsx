import {Link} from "react-router-dom";
import React from "react";
import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";



const Logo = ({isDark}) => {
    return (
        <Link
            to="/"
            className={`flex space-x-2 items-center w-[156px] h-[60px] rounded-[5px] px-4 transition-all group
              ${isDark ? 'bg-[#2A2A2A] hover:bg-[#777777] active:bg-[#AAAAAA]' : 'bg-transparent hover:bg-[#0146BE] active:bg-[#002F80]'}
           
            `}
        >
            <LogoIcon className={`
                ${isDark ? 'fill-white': 'fill-[#0177E8]' }
                group-hover:fill-white 
                group-active:fill-white 
                transition-all`} />
            <span className={`
            font-poppins 
            text-lg font-semibold 
            ${isDark ? 'text-white' :'text-[#0177E8]' }
            group-hover:text-white 
            group-active:text-white 
            transition-all`
            }>
                blueprint
            </span>
        </Link>
    );
}

export default Logo;

