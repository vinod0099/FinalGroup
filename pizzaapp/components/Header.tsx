'use client'
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";

const Header = () => {
  const openMailchimpSignup = () => {
    const mailchimpSignupUrl = 'http://eepurl.com/iFcxPQ';
    window.open(mailchimpSignupUrl, '_blank');
  };

  return (
    <Navbar className="navbar">
      <NavbarBrand>
        <img 
          src="/logo-png.webp" 
          alt="Your Brand Logo" 
          className="mt-2 ml-0 w-[220px] h-[50px]" // Adjust the margin-top (mt-2) and margin-left (ml-0) as needed
        />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#home">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#menu" color="foreground" >
            Menu
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#aboutus">
            About Us
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          {/* Tailwind CSS applied for orange background and hover effect */}
          <Button 
            className="bg-orange-500 text-white hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            onClick={openMailchimpSignup}
          >
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
