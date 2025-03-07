import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#0f2027] to-[#2c5364] text-white text-center p-5">
      <p className="text-sm">&copy; {new Date().getFullYear()} Derick Davis. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
