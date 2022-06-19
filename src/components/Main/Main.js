import React from "react";
import Image from "next/image";
import styles from "../../styles/Main.module.css";
import pullover from "../../assets/pulloverImg.png";
import skirt from "../../assets/skirtImg.png";
import HeaderIcon from "../Header/HeaderIcon";
import { PlusIcon } from "@heroicons/react/solid";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Main() {
  return (
    <div className={styles.main}>
      <div className="flex items-end justify-between px-4">
        {/* name + add button */}
        <div className="flex items-center justify-between pb-20 px-20 w-5/12">
          <div className="text-4xl uppercase font-bold">
            Tied Green <br /> V Neck Shirt
          </div>
          <div>
            <PlusIcon className="h-8 text-center sm:h-10  rounded-full bg-black p-2 shadow-md text-white" />
          </div>
        </div>

        {/* outfit breakdown cards */}
        <div className="flex flex-col w-1/3 px-6 py-20 gap-y-6">
          {/* top */}
          <div
            className="rounded-2xl p-4 flex items-center justify-between shadow-md h-40 w-80"
            style={{ position: "relative" }}
          >
            {/* name and price */}
            <div className="flex flex-col items-start justify-around h-full">
              <div className="w-1/3 flex-wrap">Half Dome Pullover</div>
              <div className="text-tp font-extrabold">$87</div>
            </div>
            {/* image */}
            <Image
              src={pullover}
              layout="fill"
              objectFit="contain"
              alt="pullover"
            />
          </div>
          {/* bottom */}
          <div
            className="rounded-2xl p-4 flex items-center justify-between shadow-md h-40 w-80"
            style={{ position: "relative" }}
          >
            {/* name and price */}
            <div className="flex flex-col items-start justify-around h-full">
              <div>Skirt</div>
              <div className="text-tp font-extrabold">$20</div>
            </div>
            {/* image */}
            <Image src={skirt} layout="fill" objectFit="contain" alt="skirt" />
          </div>
        </div>
      </div>
      <div className="flex items-center w-full justify-start gap-x-6 pl-24">
        <div className="p-2 rounded-xl border-td border-2 shadow-md">
          <FaFacebookF />
        </div>
        <div className="p-2 rounded-xl border-td border-2 shadow-md">
          <FaInstagram />
        </div>
        <div className="p-2 rounded-xl border-td border-2 shadow-md">
          <FaTwitter />
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Main;
