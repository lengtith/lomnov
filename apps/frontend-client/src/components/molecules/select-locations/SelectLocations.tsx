"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
const IconLocation = dynamic(() => import("@/icons").then((mod) => mod.IconLocation));

interface Option {
  name: string;
}

interface CustomDropdownProps {
  options: Option[];
  defaultOption: Option;
}

interface SelectPropertiesProps {
  onChange: (option: Option) => void;
}

const locations = [
  { name: "banteay meanchey" },
  { name: "battambang" },
  { name: "kampong cham" },
  { name: "kampong chhang" },
  { name: "kampong speu" },
  { name: "kampong thom" },
  { name: "kampot" },
  { name: "kandal" },
  { name: "kep" },
  { name: "koh kong" },
  { name: "kratié" },
  { name: "mondulkiri" },
  { name: "Oddar Meanchey" },
  { name: "pailin" },
  { name: "phnom penh" },
  { name: "preah Sihanouk" },
  { name: "preah Vihear" },
  { name: "prey Veng" },
  { name: "pursat" },
  { name: "siem reap" },
  { name: "stung treng" },
  { name: "svay rieng" },
  { name: "takéo" },
  { name: "tboung khmum" },
];

const defaultLocation = { name: "Locations" };

const SelectLocations: React.FC<SelectPropertiesProps> = ({ onChange }) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(
    defaultLocation,
  );
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange(option);
  };

  return (
    <div className="relative inline-block bg-grayish-white rounded-lg">
      <button
        className="flex items-center justify-between w-full px-4 py-2  "
        onClick={toggleDropdown}
      >
        {selectedOption ? (
          <div className="flex items-center">
            <IconLocation props="mr-3 text-olive-green" />
            <span className="text-black text-[14px] lg:mr-20">
              {selectedOption.name}
            </span>
          </div>
        ) : (
          "Select an option"
        )}
        <svg
          className={`w-5 h-5 ml-2 transition-transform transform text-olive-green ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      {isOpen && (
        <div
          className={` rounded-md absolute left-0 right-0 z-20 mt-2 bg-[#E0E0DC] shadow-lg transition-all duration-300 ${isOpen ? "max-h-[190px] overflow-auto opacity-100 p-2" : "max-h-0 opacity-0"}`}
        >
          {locations.map((option, index) => (
            <div
              key={index}
              className="flex items-center px-4 py-2 cursor-pointer hover:bg-olive-green overflow-auto rounded-md "
              onClick={() => handleOptionClick(option)}
            >
              <span className="text-black text-[14px] capitalize w-full hover:text-white">
                {option.name}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectLocations;
