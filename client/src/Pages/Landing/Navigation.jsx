import React from "react";

export const Navigation = () => {
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
    <div className=" hidden  lg:flex lg:justify-center lg:items-center lg:space-x-12 lg:mt-5 lg:py-2 lg:bg-primary lg:bg-opacity-30 lg:max-w-6xl lg:mx-auto lg:rounded-lg ">
      <div>logo</div>
      <div className="">
        {navigationLinks.map((props, index) => (
          <a key={index} href={props.navLink} className="mr-10 text-white">
            {props.navLabel}
          </a>
        ))}
      </div>
      <div className="flex space-x-2">
        <input
          type="search"
          placeholder="Search..."
          className="bg-gray-200 rounded-md outline-none"
        />
        <button className="bg-primary border border-primary text-white rounded-md py-1 px-3">
          Join Us
        </button>
        <button className="border-2 border-primary rounded-md  px-3 text-primary">
          Sign In
        </button>
      </div>
    </div>
  );
};


