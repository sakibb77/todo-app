import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-gray-900 mx-auto container p-10 rounded-bl-lg rounded-br-lg lg:max-w-4xl">
      <p className="text-sm text-center text-teal-600">
        &copy; {new Date().getFullYear()} React Todo App. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
