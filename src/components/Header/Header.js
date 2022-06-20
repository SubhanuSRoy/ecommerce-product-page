import React,{useRef,useEffect,useState} from "react";
import {
  MenuAlt2Icon,
  CakeIcon,
  HeartIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";
import { gsap } from "gsap";

function Header() {
  // reference to the header of the page
  // const headerRef = useRef();
  const headerRef = useRef();

  // wait until DOM has been rendered
  useEffect(() => {
    gsap.from(headerRef.current, { y: -100, duration: 0.2,ease:"bounce" });
    gsap.to(headerRef.current, { y: 0, duration: 0.2,delay:0.5 });
  }, []);
  return (
    <div
      className="flex items-center uppercase w-full justify-between gap-x-80 py-4 shadow-md"
      ref={headerRef}
    >
      <div className="w-1/2 flex justify-around items-center font-Oswald">
        <HeaderIcon Icon={MenuAlt2Icon} active />
        <HeaderIcon Icon={CakeIcon} />
        {/* <div className="pl-10 py-0 border-l-2 border-l-sl">new</div> */}
        <div className="font-bold">new</div>
        <div className="font-bold">sale</div>
        <div className="font-bold">men</div>
        <div className="font-bold">women</div>
      </div>

      <div className="w-1/2 flex justify-around items-center gap-x-40 font-Oswald ">
        <div className="w-1/2 flex justify-around items-center">
          <HeaderIcon Icon={HeartIcon} />
          <div className="font-bold">search</div>
        </div>
        <div className=" flex justify-around items-center gap-x-4 ">
          <HeaderIcon Icon={ShoppingBagIcon} />
          <HeaderIcon Icon={UserIcon} />
        </div>
      </div>
    </div>
  );
}

export default Header;
