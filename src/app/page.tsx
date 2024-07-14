// pages.tsx

import React from "react";
import Navbar from "../components/Navbar"; // Adjust the path as per your project structure
import Hero from "@/components/Hero";
import AboutPage from "@/components/AboutPage";
import Facilities from "@/components/Facilities";

const Pages: React.FC = () => {
  return (
    <div>
      <Hero />
      <AboutPage />
      <Facilities />
    </div>
  );
};

export default Pages;
