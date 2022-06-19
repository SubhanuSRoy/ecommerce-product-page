import React from "react";
import styles from "../../styles/Main.module.css";
import pullover from "../../assets/pulloverImg.png";
import skirt from "../../assets/skirtImg.png";
import HeaderIcon from "../Header/HeaderIcon";
import {PlusIcon} from "@heroicons/react/solid";

function Main() {
  return (
    <div className={styles.main}>
      <div className="flex items-end justify-between px-4">
        {/* name + add button */}
        <div className="flex items-center justify-between pb-10 px-20 w-120">
            <div className="text-4xl uppercase font-bold">Tied Green <br /> V Neck Shirt</div>
            <div><PlusIcon className=" h-5 text-gray-500 text-center sm:h-7  rounded-full bg-black p-2 shadow-md text-white"/></div>
        </div>

        {/* outfit breakdown cards */}
        <div className="flex flex-col w-1/3 px-6 py-20 ">
          {/* top */}
          <div className="rounded-md p-4 flex items-center justify-between shadow-md">
            {/* name and price */}
            <div className="flex flex-col items-start justify-between">
              <div>Half Dome Pullover</div>
              <div className="text-tp font-extrabold">$87</div>
            </div>
            {/* image */}
            <img src={pullover} width="50%" alt="pullover" />
          </div>
          {/* bottom */}
          <div className="rounded-md p-4 flex items-center justify-between shadow-md h-40">
            {/* name and price */}
            <div className="flex flex-col items-start justify-around h-full">
              <div>Skirt</div>
              <div className="text-tp font-extrabold">$20</div>
            </div>
            {/* image */}
            <img src={skirt} className="w-1/2" alt="skirt" />
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Main;
