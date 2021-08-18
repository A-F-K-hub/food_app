import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import * as Scroll from "react-scroll";
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn,
} from "./HeroElements";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeroContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <HeroH1>South Africa's Hottest Oven</HeroH1>
          <HeroP>Open 24 Hrs. Best Pizzeria</HeroP>
          <HeroBtn to="products">Place Order</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
