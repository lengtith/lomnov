"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const ContainerHeader = dynamic(()=>import("./ContainerHeader"))

export const menus = [
  {
    id: 1,
    name: "home",
    slug: "/",
    lang: "eng",
  },
  {
    id: 2,
    name: "buy",
    slug: "/buy",
    lang: "eng",
  },
  {
    id: 3,
    name: "rent",
    slug: "/rent",
    lang: "eng",
  },
];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full h-[90px] fixed top-0 z-30 transition-colors duration-300 ${scrolled ? " bg-olive-drab" : "bg-transparent"}`}
    >
      <ContainerHeader menu={menus} />
    </header>
  );
};

export default Header;