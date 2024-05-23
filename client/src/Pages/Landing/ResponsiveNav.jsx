import React from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { CgShoppingBag } from "react-icons/cg";
import { GoPerson } from "react-icons/go";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

export const ResponsiveNav = () => {
  const [menuClicked, setMenuClicked] = useState();

  const onMenuClick = () => {
    setMenuClicked(!menuClicked);
  };

  const navigationLinks = [
    {
      navLabel: "Home",
      navLink: "",
    },
    {
      navLabel: "New & Featured",
      navLink: "",
    },
    {
      navLabel: "Men",
      navLink: "",
    },
    {
      navLabel: "Women",
      navLink: "",
    },
    {
      navLabel: "Sale",
      navLink: "",
    },
  ];
  return (
    <>
      <div
        className={
          !menuClicked
            ? "flex justify-between align-top pt-5 px-5 lg:hidden "
            : "flex justify-between align-top pt-5 px-1 lg:hidden bg-white h-[200px]"
        }
      >
        <button className="flex" onClick={onMenuClick}>
          {!menuClicked ? (
            <RiMenu2Fill color="white" fontSize={25} />
          ) : (
            <IoClose />
          )}
        </button>
        <div
          className={
            menuClicked
              ? "fixed left-24 flex flex-col gap-y-2 align-top"
              : "hidden"
          }
        >
          {navigationLinks.map((props, index) => (
            <a key={index} href={props.navLink}>
              {props.navLabel}
            </a>
          ))}
        </div>
        <div className="flex space-x-5 align-top  text-white">
          <button className={menuClicked ? "text-black flex" : "text-white"}>
            <FaRegHeart fontSize={25} />
          </button>
          <button className={menuClicked ? "text-black flex" : "text-white"}>
            <CgShoppingBag fontSize={25} />
          </button>
          <button className={menuClicked ? "text-black flex" : "text-white"}>
            <GoPerson fontSize={25} />
          </button>
        </div>
      </div>
    </>
  );
};
