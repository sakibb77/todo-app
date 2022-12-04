import { FaReact } from "react-icons/fa";
import React from "react";

const Header = () => {
  return (
    <header className="header bg-gray-900 mx-auto container p-6 md:py-10 border-dashed border-b rounded-tl-lg rounded-tr-lg border-teal-900 lg:max-w-4xl">
      <h2 className="uppercase font-semibold tracking-wider flex gap-2 items-center text-teal-500">
        <span>
          <FaReact />
        </span>
        <span>react todo app</span>
      </h2>
    </header>
  );
};

export default Header;
