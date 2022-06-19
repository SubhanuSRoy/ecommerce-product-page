import React from "react";
import Image from "next/image";
import { ChevronRightIcon } from "@heroicons/react/solid";
import Side from "../SIde/Side";
import p1 from "../../assets/p1.jpg"
import p2 from "../../assets/p2.jpg"
import p3 from "../../assets/p3.jpg"
import HeaderIcon from "../Header/HeaderIcon";

function Product() {
  return (
    <div className="flex justify-between w-full pt-16">
      {/* product description */}
      <div className="flex flex-col items-start w-2/3 gap-y-2 pl-20">
        {/* name of product */}
        <div className="text-4xl uppercase font-bold">
          Tied green <br /> v-neck shirt
        </div>
        {/* price of product */}
        <div className="text-3xl font-normal">$67</div>
        <div className="flex w-full gap-x-12 items-center">
          <div>
            V Neck shirt with lapel collar. Long sleeves with cuffs. <br />
            Front tie at hem. Front button at closure.
          </div>
          <div>
            <div className="rounded-full  bg-red py-10 px-9  shadow-md text-white" > ADD </div>
          </div>
        </div>
        <div className="uppercase font-bold">select size</div>
        <div className="flex w-1/3 items-center gap-x-4 mt-2 mb-6">
            <div className="py-3 px-5 rounded-full border-td border-2 shadow-md">S</div>
            <div className="py-3 px-4 rounded-full border-td border-2 shadow-md">M</div>
            <div className="py-3 px-5 rounded-full border-td border-2 shadow-md">L</div>
            <div className="uppercase text-td font-bold">size guide</div>
        </div>
        <div className="flex items-center gap-x-2 w-full">
            <Image className="shadow-md rounded-md" src={p1} height={180} width={120}/>
            <Image className="shadow-md rounded-md" src={p2} height={180} width={120}/>
            <Image className="shadow-md rounded-md" src={p3} height={180} width={120}/>
            <HeaderIcon Icon={ChevronRightIcon}/>
        </div>
      </div>
      {/* image */}
      <Side />
    </div>
  );
}

export default Product;
