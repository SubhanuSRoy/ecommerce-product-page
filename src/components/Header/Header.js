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
    gsap.from(headerRef.current, { y: -100, duration: 2,delay:1 });
    gsap.to(headerRef.current, { y: 0, duration: 2, delay: 1 });
  }, []);
  return (
    <div
      className="flex items-center uppercase w-full justify-between gap-x-80 pb-6 shadow-md"
      ref={headerRef}
    >
      <div className="w-1/2 flex justify-around items-center">
        <HeaderIcon Icon={MenuAlt2Icon} active />
        <HeaderIcon Icon={CakeIcon} />
        {/* <div className="pl-10 py-0 border-l-2 border-l-sl">new</div> */}
        <div>new</div>
        <div>sale</div>
        <div>men</div>
        <div className="">women</div>
      </div>

      <div className="w-1/2 flex justify-around items-center gap-x-40 ">
        <div className="w-1/2 flex justify-around items-center">
          <HeaderIcon Icon={HeartIcon} />
          <div>search</div>
        </div>
        <div className="pl-20 flex justify-around items-center ">
          <HeaderIcon Icon={ShoppingBagIcon} />
          <HeaderIcon Icon={UserIcon} />
        </div>
      </div>
    </div>
  );
}

export default Header;
