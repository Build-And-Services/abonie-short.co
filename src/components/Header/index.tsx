import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../../assets/logo.png";
import { useState, useEffect } from "react";
import NavMenu from "./nav-menu";
import MobileNav from "./mobile-nav";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed max-w-6xl w-full left-[50%] -translate-x-1/2 z-50">
      <div
        className={`flex justify-between items-center max-w-6xl bg-white rounded-full shadow-xl p-2 md:p-4 mx-4 duration-300 ${
          scrolled ? "mt-0" : "mt-4 md:mt-8"
        }`}>
        <div className="flex items-center">
          <img src={Logo} alt="Abonie Digital" className="w-10" />
          <span className="text-black font-bold">Abonie Digital</span>
        </div>
        <NavMenu />

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <GiHamburgerMenu className="w-5 h-5 mr-2 text-black" />
        </button>

        <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </header>
  );
};

export default Header;
