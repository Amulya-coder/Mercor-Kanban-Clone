import React, { useState } from "react";
import { arrowLeft } from "../assets/icons";
import SearchBar from "./SearchBar";
import { navList } from "../constants";
import { profile } from "../assets/images";
import Hamburger from "./Hamburger";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex justify-between items-center border-b border-gray-300 py-4 h-20 px-4 md:px-6 lg:px-8">
      {/* left section */}
      <div className="flex items-center gap-4">
        {/* {!isOpen && (
          <button className="flex hover:-translate-x-1 transition-transform rotate-180 md:hidden">
            <img className="-mr-3.5" src={arrowLeft} alt="" />
            <img className="" src={arrowLeft} alt="" />
          </button>
        )} */}

        <span className="md:hidden">
          <Hamburger />
        </span>

        <div className="hidden md:block">
          <SearchBar />
        </div>
      </div>

      {/* right section */}
      <div className="flex items-center gap-6">
        <div className=" space-x-4">
          {navList.map(({ icon, id, text }) => (
            <button key={id}>
              <img className="h-6 w-6" src={icon} alt="" />
              <span className="sr-only">{text}</span>
            </button>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <div className="text-sm text-right hidden md:block">
            <p className="font-medium">Anima Agrawal</p>
            <p className="text-dark-gray">U.P, India</p>
          </div>
          <div className="flex items-center gap-2">
            <img className="rounded-full" src={profile} alt="" />
            <img className="-rotate-90" src={arrowLeft} alt="" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
