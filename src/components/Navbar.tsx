"use client";
import React, { useState } from "react";
import { Icons } from "./Icons";
import {
  User2,
  Menu,
  X,
  Home,
  Info,
  MenuIcon,
  Settings,
  Plus,
  Hotel,
  Phone,
} from "lucide-react"; // Assuming you have these icons
import { delay, motion } from "framer-motion";
import Link from "next/link";

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-0 bg-[#ECEAE5]">
      <div
        className="flex flex-col w-screen p-8 overflow-hidden z-[2]"
        style={{ zIndex: "100" }}
      >
        <div className="flex justify-between items-center px-3 sm:px-12 ">
          <div className="flex text-[26px] sm:text-[42px] text-[#FF7433] font-extrabold roboto-slab  self-center">
            SHREE RADHE
          </div>
          <div className="hidden text-[#09566E] roboto-slab md:flex gap-8 uppercase items-center font-semibold  text-[18px]">
            <Link href={"/"}>
              <div className="self-center cursor-pointer">Home</div>
            </Link>
            <Link href={"/"}>
              <div className="self-center cursor-pointer">Amenities</div>
            </Link>
            <Link href={"/"}>
              <div className="self-center cursor-pointer">Rooms</div>
            </Link>
            <Link href={"/"}>
              <div className="self-center cursor-pointer">About</div>
            </Link>
            <Link href={"/"}>
              <div className="self-center cursor-pointer">Contact</div>
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="z-50 4 sm:mt-0">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <motion.div
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center gap-12 absolute top-24 left-0  text-[40px] font-semibold w-screen z-[1] p-12 bg-[#ECEAE5] mt-2 h-screen text-pretty italic"
          >
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="flex flex-col h-[90vh] overflow-hidden items-center gap-12 absolute  left-0  text-[30px] font-semibold w-screen z-[1] px-12 py-2 text-pretty italic"
            >
              <motion.div
                variants={staggerItem}
                className="self-center flex justify-between w-full items-center gap-2"
              >
                <Home size={40} /> Home
              </motion.div>
              <motion.div
                variants={staggerItem}
                className="self-center justify-between w-full flex items-center gap-[40px]"
              >
                <Info size={40} /> Amenities
              </motion.div>
              <motion.div
                variants={staggerItem}
                className="self-center justify-between w-full flex items-center gap-2"
              >
                <Hotel size={40} /> Rooms
              </motion.div>
              <motion.div
                variants={staggerItem}
                className="self-center justify-between w-full flex items-center gap-2"
              >
                <Info size={40} /> About
              </motion.div>
              <motion.div
                variants={staggerItem}
                className="self-center justify-between w-full flex items-center gap-2"
              >
                <Phone size={40} /> Contact
              </motion.div>
            </motion.div>
          </motion.div>
        )}
        <hr className="w-[70%] self-center mt-5" />
      </div>
    </div>
  );
};

export default Navbar;
