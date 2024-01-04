import React from "react";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <div className="flex items-center w-full p-6 z-50 justify-between dark:bg-[#1f1f1f]">
      <Logo />
      <div className="flex items-center md:ml-auto max-sm:w-full max-sm:justify-between">
        <Button variant="ghost" size="sm">
          Privacy Policy
        </Button>
        <Button variant="ghost" size="sm">
          Terms & Conditions
        </Button>
      </div>
    </div>
  );
};

export default Footer;
